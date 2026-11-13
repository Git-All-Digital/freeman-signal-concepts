(()=>{
  const form=document.querySelector('#called-form');if(!form)return;
  const params=new URLSearchParams(location.search);
  const validOffer=params.get('offer')==='annual'?'annual':'waitlist';
  form.querySelector(`[name="offer"][value="${validOffer}"]`).checked=true;
  const member=params.get('membership');
  if(['annual','monthly','new'].includes(member))form.querySelector(`[name="membership"][value="${member}"]`).checked=true;
  const today=new Date().toISOString().slice(0,10);
  const sample=new Date();sample.setUTCDate(sample.getUTCDate()+90);
  form.elements.paidThrough.value=sample.toISOString().slice(0,10);form.elements.paidThrough.min=today;
  const read=()=>({offer:form.elements.offer.value,member:form.elements.membership.value,billing:form.elements.billing.value,paidThrough:form.elements.paidThrough.value,lines:form.elements.lines.value});
  const dateText=value=>new Intl.DateTimeFormat('en-US',{timeZone:'UTC',month:'long',day:'numeric',year:'numeric'}).format(new Date(value+'T00:00:00Z'));
  const yearLater=value=>{const [y,m,d]=value.split('-').map(Number);const max=new Date(Date.UTC(y+1,m,0)).getUTCDate();return `${y+1}-${String(m).padStart(2,'0')}-${String(Math.min(d,max)).padStart(2,'0')}`};
  const timing=s=>s.offer==='waitlist'?'No membership purchase. No number transfer.':s.member==='annual'?(s.paidThrough?`Your current term stays intact. The additional 12-month term would begin after ${dateText(s.paidThrough)}, with its paid-through date advanced to ${dateText(yearLater(s.paidThrough))}.`:'Choose a sample paid-through date to see your extension.'):s.member==='monthly'?'Annual access would begin when you enroll. Angel would reconcile your current monthly billing before payment.':'Your first 12 months of Guild access would begin when you enroll.';
  const switchScreen=name=>{document.querySelectorAll('[data-screen]').forEach(el=>el.hidden=el.dataset.screen!==name);document.querySelectorAll('[data-step-label]').forEach(el=>{if(el.dataset.stepLabel===name)el.setAttribute('aria-current','step');else el.removeAttribute('aria-current')});document.querySelector(`[data-screen="${name}"] h2`).focus()};
  const error=message=>{const e=document.querySelector('.journey-error');e.textContent=message;e.hidden=!message};
  const update=()=>{
    const s=read(),annual=s.offer==='annual',existing=s.member!=='new',blocked=annual&&existing&&s.billing!=='web';
    document.querySelector('.annual-fields').hidden=!annual;
    document.querySelector('.annual-date').hidden=!(annual&&s.member==='annual');
    form.elements.paidThrough.required=annual&&s.member==='annual';
    form.elements.paidThrough.disabled=!(annual&&s.member==='annual');
    form.elements.billing.disabled=!annual||!existing;
    document.querySelector('.field:has([name="billing"])').hidden=!existing;
    document.querySelector('.billing-detour').hidden=!blocked;
    document.querySelector('[data-billing-message]').textContent=blocked?'Your existing billing platform needs its own supported path. Keep your membership as it is. You can use the free wireless waitlist instead.':annual&&s.member==='annual'?'An early extension is proposed. Angel would verify your current paid-through date and eligibility before any purchase.':annual&&s.member==='monthly'?'Angel would show the exact monthly-to-annual adjustment before you pay.':'';
    const review=form.querySelector('[data-review-button]');review.disabled=blocked;review.textContent=annual?'Review The Called Year ↗':'Review my waitlist preview ↗';
    document.querySelector('[data-summary-name]').textContent=annual?'The Called Year':'Free wireless waitlist';
    document.querySelector('[data-summary-price]').textContent=annual?'$159 / illustrative year':'$0';
    document.querySelector('[data-summary-description]').textContent=annual?'Eligible annual Guild membership + a proposed $25 credit after qualifying wireless activation.':'Interest only. No deposit or obligation to switch.';
    document.querySelector('[data-summary-timing]').textContent=timing(s);
    error('');
  };
  window.CalledJourney={update,free(){form.querySelector('[name="offer"][value="waitlist"]').checked=true;update();form.querySelector('[data-review-button]').focus()},review(event){event.preventDefault();const s=read();if(s.offer==='annual'&&s.member!=='new'&&s.billing!=='web'){error('Use the free waitlist while your existing billing path is reviewed.');return false}if(!form.reportValidity())return false;if(!form.elements.understood.checked){error('Confirm that you understand this is a sample preview before continuing.');form.elements.understood.focus();return false}
    const rows=[['Your path',s.offer==='annual'?'The Called Year':'Free wireless waitlist'],['Sample contact','Alex Morgan · alex@example.com'],['Household interest',`${s.lines} ${s.lines==='1'?'line':'lines'}`],['Illustrative membership amount',s.offer==='annual'?'$159 for the illustrated year. Exact eligible rate and renewal terms would be confirmed by Angel.':'$0. No annual membership purchase.'],['Your membership timing',timing(s)],['Proposed wireless benefit',s.offer==='annual'?'One $25 credit after eligible wireless activation, subject to final terms. No wireless service included in annual price.':'A future invitation if service becomes available for your household.']];
    const list=document.querySelector('[data-review-list]');list.replaceChildren();rows.forEach(([term,value])=>{const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=term;dd.textContent=value;list.append(dt,dd)});document.querySelector('.payment-sample').hidden=s.offer!=='annual';switchScreen('review');return false},back(){switchScreen('choose')},confirm(){const s=read();document.querySelector('[data-confirm-title]').textContent=s.offer==='annual'?'Your Called Year preview is ready.':'Your waitlist preview is ready.';document.querySelector('[data-confirm-copy]').textContent=s.offer==='annual'?'A year of stories and a connection to what comes next. Here is how your proposed journey would look.':'A simple first hello. Here is how your place on the free interest list would look.';document.querySelector('[data-ticket-title]').textContent=s.offer==='annual'?'The Called Year':'First connections';document.querySelector('[data-ticket-detail]').textContent=s.offer==='annual'?timing(s):`${s.lines} ${s.lines==='1'?'line':'lines'} of household interest. Free waitlist. No deposit.`;switchScreen('done')},restart(){form.elements.understood.checked=false;switchScreen('choose')}};
  update();
})();
