(()=>{
  const brands={called:'Called','guild-wireless':'Guild Wireless','good-word':'Good Word'};
  const selected=new URLSearchParams(location.search).get('brand');
  if(selected&&brands[selected]){
    document.querySelectorAll('[data-brand-name]').forEach(el=>el.textContent=brands[selected]);
    document.querySelectorAll('[data-consumer]').forEach(el=>el.href=`../${selected}/`);
    if(document.body.classList.contains('business')) document.title=`${brands[selected]} | The partnership idea`;
  }
  const calc=document.querySelector('.calculator');
  const dialog=document.querySelector('.switch-dialog');
  let count=4,lastTrigger;
  const money=n=>n.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2});
  const business=()=>{const h=document.querySelector('[data-biz-households]');if(!h)return;const households=h.valueAsNumber,n=Number(document.querySelector('[data-biz-lines]').value),c=document.querySelector('[data-biz-cost]').valueAsNumber;const e=document.querySelector('[data-business-error]');if(!Number.isInteger(households)||households<1||!Number.isFinite(c)||c<0){e.textContent='Enter a positive whole household count and a nonnegative line cost.';return}e.textContent='';const price=AngelOffer.price(n),guild=AngelOffer.guild(n),contribution=price-n*c-guild;const set=(k,v)=>document.querySelector('[data-biz-'+k+']').textContent=money(v);set('revenue',price*households);set('guild',guild*households);set('contribution',contribution*households);set('annual',contribution*households*12);const ceiling=(price-guild-20)/n;set('ceiling',ceiling);document.querySelector('[data-biz-verdict]').textContent=contribution<0?'This case loses money before fixed costs. Reprice or lower the cost before proceeding.':`This case leaves ${money(contribution)} per household per month before fixed costs. A $20 target requires line cost at or below ${money(ceiling)}.`};
  const update=()=>{if(!calc)return;const prepaid=!!document.querySelector('#prepaid-guild')?.checked,q=AngelOffer.quote(count,prepaid);document.querySelector('#line-count').textContent=`${count} ${count===1?'line':'lines'}`;document.querySelector('[data-plan-total]').textContent=money(q.total);document.querySelector('[data-per-line]').textContent=money(q.perLine)+' per line';document.querySelector('[data-marginal]').textContent=q.next===null?'12 lines illustrated. A larger household would need a tailored quote.':`Add line ${count+1} for ${money(q.next)} more per month.${count===3?' That fourth line also adds Guild Premium for the household.':''}`;document.querySelector('[data-guild-status]').textContent=q.guild?'Included with 4+ active lines':'Included at 4+ active lines';document.querySelector('.prepaid-result').hidden=!q.prepaidCredit;document.querySelector('[data-prepaid-credit]').textContent='-'+money(q.prepaidCredit)+'/month';document.querySelector('[data-prepaid-bill]').textContent=money(q.bill)+'/month';document.querySelector('[data-prepaid-explanation]').textContent=prepaid&&q.guild?'Your existing Guild term stays intact. The illustrated $13.25 wireless credit stands in for the included membership during that prepaid term; it is not an additional second benefit.':'Guild reference: $159/year, or $13.25/month. Existing monthly subscriptions would be linked and reconciled to prevent duplicate billing. Final eligibility and terms remain to be set.';document.querySelector('[data-line-value]').textContent=money(q.lineReduction)+'/month';calc.querySelector('[data-step="-1"]').disabled=count===1;calc.querySelector('[data-step="1"]').disabled=count===12};
  window.AngelUI={refresh:update,business,
    step(delta){count=Math.max(1,Math.min(12,count+delta));update()},
    open(trigger){if(dialog){lastTrigger=trigger;dialog.showModal()}},
    close(){dialog?.close()},
    next(){
      if(!dialog)return;
      const missing=[...dialog.querySelectorAll('input[type="checkbox"]')].find(input=>!input.checked);
      const status=dialog.querySelector('.switch-status');
      if(missing){status.textContent='Review each item before viewing the next steps.';dialog.querySelector('.switch-result').hidden=true;missing.focus();return}
      status.textContent='Here is what a real provider would help you verify.';
      dialog.querySelector('.switch-result').hidden=false;
      dialog.querySelector('.switch-result').scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
    }
  };
  if(dialog){
    dialog.addEventListener('close',()=>lastTrigger?.focus());
    dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
  }
  update();business();
})();
