(()=>{
  const form=document.querySelector('#called-form');if(!form)return;
  const lines=Number(new URLSearchParams(location.search).get('lines'));
  if(Number.isInteger(lines)&&lines>=1&&lines<=12)form.elements.lines.value=String(lines);
  const count=()=>{const n=form.elements.lines.value;return `${n} ${n==='1'?'line':'lines'}`};
  const error=message=>{const e=document.querySelector('.journey-error');e.textContent=message;e.hidden=!message};
  const update=()=>{
    document.querySelector('[data-family-preview]').textContent=`${count()} of household interest. Illustrative paid-Guild wireless rate: $23 per line, including taxes and fees. Guild membership stays separate.`;
    error('');
  };
  const screen=name=>{
    document.querySelectorAll('[data-screen]').forEach(el=>el.hidden=el.dataset.screen!==name);
    document.querySelectorAll('[data-step-label]').forEach(el=>{if(el.dataset.stepLabel===name)el.setAttribute('aria-current','step');else el.removeAttribute('aria-current')});
    document.querySelector(`[data-screen="${name}"] h2`).focus();
  };
  window.CalledJourney={update,review(event){
    event.preventDefault();
    if(!form.elements.understood.checked){error('Confirm that you understand this is a sample preview before continuing.');form.elements.understood.focus();return false}
    const rows=[['Your path','Free wireless waitlist'],['Sample contact','Alex Morgan · alex@example.com'],['Household interest',count()],['Due today','$0'],['Your Guild membership','No changes to your Guild plan.']];
    const list=document.querySelector('[data-review-list]');list.replaceChildren();
    for(const [term,value] of rows){const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=term;dd.textContent=value;list.append(dt,dd)}
    screen('review');return false;
  },back(){screen('choose')},confirm(){
    document.querySelector('[data-confirm-title]').textContent='Your waitlist preview is ready.';
    document.querySelector('[data-confirm-copy]').textContent='Here is how your place on the free interest list would look.';
    document.querySelector('[data-ticket-title]').textContent='First connections';
    document.querySelector('[data-ticket-detail]').textContent=`${count()} of household interest. Free waitlist. No deposit.`;
    screen('done');
  },restart(){form.elements.understood.checked=false;update();screen('choose')}};
  document.querySelector('[data-summary-name]').textContent='Free wireless waitlist';
  document.querySelector('[data-summary-price]').textContent='$0';
  document.querySelector('[data-summary-description]').textContent='Interest only. No deposit or obligation to switch.';
  document.querySelector('[data-summary-timing]').textContent='No membership purchase. No number transfer.';
  update();
})();
