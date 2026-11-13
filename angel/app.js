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
  let count=2,lastTrigger;
  const update=()=>{
    if(!calc)return;
    const credit=Math.min(count*2.5,5);
    document.querySelector('#line-count').textContent=`${count} ${count===1?'line':'lines'}`;
    document.querySelector('[data-credit]').innerHTML=`$${Math.floor(credit)}<span>.${credit%1?'50':'00'}</span>`;
    document.querySelector('[data-annual]').textContent=`$${credit*12}`;
    const cap=calc.querySelector('[data-cap-status]');
    if(cap)cap.textContent=count===1?'One line earns a proposed $2.50 monthly credit. A second line reaches the $5 household maximum.':count===2?'Household maximum reached at two lines. Additional lines do not increase this proposed credit.':`${count} lines selected. The household credit stays at $5 per month: the maximum was reached at two lines. This calculator shows the membership credit only; wireless plan pricing is still to be set.`;
    calc.querySelector('[data-step="-1"]').disabled=count===1;
    calc.querySelector('[data-step="1"]').disabled=count===12;
  };
  window.AngelUI={
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
  update();
})();
