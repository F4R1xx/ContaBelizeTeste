const _0x188cfb=_0x7ecb;(function(_0x132f74,_0x186fc4){const _0x43fc0b=_0x7ecb,_0x36759a=_0x132f74();while(!![]){try{const _0x21a22a=-parseInt(_0x43fc0b(0x10c))/0x1*(-parseInt(_0x43fc0b(0xf0))/0x2)+parseInt(_0x43fc0b(0xc1))/0x3*(-parseInt(_0x43fc0b(0xb9))/0x4)+-parseInt(_0x43fc0b(0xc3))/0x5+-parseInt(_0x43fc0b(0xf7))/0x6+parseInt(_0x43fc0b(0x116))/0x7*(-parseInt(_0x43fc0b(0xd2))/0x8)+parseInt(_0x43fc0b(0xa1))/0x9+parseInt(_0x43fc0b(0xf2))/0xa*(parseInt(_0x43fc0b(0xdb))/0xb);if(_0x21a22a===_0x186fc4)break;else _0x36759a['push'](_0x36759a['shift']());}catch(_0x5421cd){_0x36759a['push'](_0x36759a['shift']());}}}(_0x3cbf,0x42843));const _0x537c5b=(function(){let _0x16cf8c=!![];return function(_0x40feae,_0x4bd7ca){const _0x1f2cd6=_0x16cf8c?function(){const _0x2dccb1=_0x7ecb;if(_0x4bd7ca){const _0x1d6c41=_0x4bd7ca[_0x2dccb1(0x127)](_0x40feae,arguments);return _0x4bd7ca=null,_0x1d6c41;}}:function(){};return _0x16cf8c=![],_0x1f2cd6;};}()),_0x4eb60e=_0x537c5b(this,function(){const _0x1c0e21=_0x7ecb;return _0x4eb60e['toString']()['search']('(((.+)+)+)+$')[_0x1c0e21(0xbb)]()[_0x1c0e21(0x112)](_0x4eb60e)[_0x1c0e21(0xcf)](_0x1c0e21(0xaa));});_0x4eb60e();const _0x3787fb=(function(){let _0x4f7dd9=!![];return function(_0x26040c,_0x484763){const _0x299319=_0x4f7dd9?function(){const _0x40e562=_0x7ecb;if(_0x484763){const _0xb62bf4=_0x484763[_0x40e562(0x127)](_0x26040c,arguments);return _0x484763=null,_0xb62bf4;}}:function(){};return _0x4f7dd9=![],_0x299319;};}()),_0x4d820b=_0x3787fb(this,function(){const _0x36adfe=_0x7ecb,_0x107e26=function(){const _0x19edba=_0x7ecb;let _0x1fe0fe;try{_0x1fe0fe=Function(_0x19edba(0x117)+_0x19edba(0xa2)+');')();}catch(_0x1bc5c2){_0x1fe0fe=window;}return _0x1fe0fe;},_0x4c3b59=_0x107e26(),_0x13ffee=_0x4c3b59['console']=_0x4c3b59['console']||{},_0x19773b=[_0x36adfe(0xf8),'warn','info',_0x36adfe(0x11d),_0x36adfe(0xa0),_0x36adfe(0x105),'trace'];for(let _0x754ae5=0x0;_0x754ae5<_0x19773b[_0x36adfe(0x128)];_0x754ae5++){const _0x15c05a=_0x3787fb[_0x36adfe(0x112)][_0x36adfe(0xf3)][_0x36adfe(0xad)](_0x3787fb),_0x288ba9=_0x19773b[_0x754ae5],_0x220eaf=_0x13ffee[_0x288ba9]||_0x15c05a;_0x15c05a[_0x36adfe(0xa5)]=_0x3787fb[_0x36adfe(0xad)](_0x3787fb),_0x15c05a[_0x36adfe(0xbb)]=_0x220eaf['toString'][_0x36adfe(0xad)](_0x220eaf),_0x13ffee[_0x288ba9]=_0x15c05a;}});_0x4d820b();import{initializeApp}from'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';import{getDatabase,set,get,update,remove,ref,child}from'https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js';import{getAuth,onAuthStateChanged}from'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';const firebaseConfig={'apiKey':_0x188cfb(0x101),'authDomain':_0x188cfb(0x11a),'projectId':'contabelize','storageBucket':_0x188cfb(0x120),'messagingSenderId':_0x188cfb(0xfb),'appId':_0x188cfb(0xe2)},app=initializeApp(firebaseConfig),db=getDatabase(app),auth=getAuth(app);function formatDateToPTBR(_0x5a7e75){const _0x4a372d=_0x188cfb,[_0x10cae7,_0x4eefb0,_0xc0dc54]=_0x5a7e75[_0x4a372d(0xe1)]('-');return _0xc0dc54+'/'+_0x4eefb0+'/'+_0x10cae7;}function formatDateToISO(_0x239a9c){const _0x23068e=_0x188cfb,[_0x50c1cb,_0x350ed3,_0x5f0ae3]=_0x239a9c[_0x23068e(0xe1)]('/');return _0x5f0ae3+'-'+_0x350ed3+'-'+_0x50c1cb;}function _0x7ecb(_0x4975e8,_0x4602d0){const _0x508c53=_0x3cbf();return _0x7ecb=function(_0x4d820b,_0x3787fb){_0x4d820b=_0x4d820b-0x9f;let _0x3c8f23=_0x508c53[_0x4d820b];return _0x3c8f23;},_0x7ecb(_0x4975e8,_0x4602d0);}function parseDatePTBR(_0x3a6db7){const [_0x4171ef,_0xaf5391,_0x350cc5]=_0x3a6db7['split']('/');return new Date(_0x350cc5,_0xaf5391-0x1,_0x4171ef);}function addOneMonthToDate(_0x1918fa){const _0x4395ba=_0x188cfb,[_0x24d88d,_0xa9fdd7,_0xebcbdc]=_0x1918fa[_0x4395ba(0xe1)]('/');let _0x6eba7a=parseInt(_0xa9fdd7)+0x1,_0x34cef5=parseInt(_0xebcbdc);return _0x6eba7a>0xc&&(_0x6eba7a=0x1,_0x34cef5+=0x1),_0x24d88d+'/'+_0x6eba7a[_0x4395ba(0xbb)]()['padStart'](0x2,'0')+'/'+_0x34cef5;}function formatDateInput(_0x57b591){const _0x5a66af=_0x188cfb;let _0x28de68=_0x57b591[_0x5a66af(0xb2)][_0x5a66af(0x10f)](/\D/g,'');if(_0x28de68[_0x5a66af(0x128)]>0x2)_0x28de68=_0x28de68[_0x5a66af(0x10f)](/(\d{2})(\d)/,_0x5a66af(0xb1));if(_0x28de68[_0x5a66af(0x128)]>0x5)_0x28de68=_0x28de68[_0x5a66af(0x10f)](/(\d{2})(\d{2})(\d)/,_0x5a66af(0x114));_0x57b591[_0x5a66af(0xb2)]=_0x28de68;}function insertPedido(){const _0xb1a84=_0x188cfb,_0x10f746=document[_0xb1a84(0xdf)](_0xb1a84(0xfa))[_0xb1a84(0xb2)][_0xb1a84(0xb3)](),_0x6f55b6=document[_0xb1a84(0xdf)]('.enterPreco')[_0xb1a84(0xb2)][_0xb1a84(0xb3)](),_0x59bd6c=document[_0xb1a84(0xdf)]('.enterCliente')[_0xb1a84(0xb2)][_0xb1a84(0xb3)](),_0x4f356f=document[_0xb1a84(0xdf)](_0xb1a84(0xa6))[_0xb1a84(0xb2)][_0xb1a84(0xb3)](),_0x4f92cd=document[_0xb1a84(0xdf)](_0xb1a84(0x108))['value'][_0xb1a84(0xb3)]();if(!_0x10f746||!_0x6f55b6||!_0x59bd6c||!_0x4f356f||!_0x4f92cd){Swal['fire']({'icon':_0xb1a84(0x10d),'title':_0xb1a84(0x111),'text':_0xb1a84(0xac),'confirmButtonColor':_0xb1a84(0xde)});return;}const _0x48369c=/^\d{4}-\d{2}-\d{2}$/;if(!_0x48369c[_0xb1a84(0xf6)](_0x10f746)){Swal['fire']({'icon':_0xb1a84(0x11d),'title':_0xb1a84(0xc6),'text':'Por\x20favor,\x20insira\x20a\x20data\x20no\x20formato\x20correto\x20(dd/mm/yyyy).','confirmButtonColor':_0xb1a84(0xde)});return;}const _0x526f29=_0x10f746[_0xb1a84(0xe1)]('-'),_0xe0ab79=_0x526f29[0x2]+'/'+_0x526f29[0x1]+'/'+_0x526f29[0x0];Swal[_0xb1a84(0xee)]({'title':_0xb1a84(0xc9),'text':_0xb1a84(0x119),'icon':_0xb1a84(0xed),'showCancelButton':!![],'confirmButtonColor':_0xb1a84(0x107),'cancelButtonColor':_0xb1a84(0xca),'confirmButtonText':_0xb1a84(0xbc),'cancelButtonText':_0xb1a84(0x11c)})[_0xb1a84(0xf9)](_0x52256d=>{const _0x534059=_0xb1a84;if(_0x52256d[_0x534059(0xdc)]){const _0x17521e=addOneMonthToDate(_0xe0ab79),_0x438cdc={'DataPedido':_0xe0ab79,'DataPagamento':_0x17521e,'Preco':parseFloat(_0x6f55b6),'Cliente':_0x59bd6c,'NomePeca':_0x4f356f,'Entrega':_0x534059(0xd6),'ParcelasPagas':0x0,'ParcelasTotais':parseInt(_0x4f92cd),'Finalizado':![]},_0x5a3ed2=Date['now']();set(ref(db,_0x534059(0xe7)+_0x5a3ed2),_0x438cdc)[_0x534059(0xf9)](()=>{const _0x2df8a3=_0x534059;Swal[_0x2df8a3(0xee)]({'icon':_0x2df8a3(0xbf),'title':_0x2df8a3(0x124),'text':'Pedido\x20inserido\x20com\x20sucesso!','confirmButtonColor':_0x2df8a3(0xde)}),fetchPedidos();})[_0x534059(0xb6)](_0x2abf05=>{const _0x362c88=_0x534059;Swal[_0x362c88(0xee)]({'icon':_0x362c88(0x11d),'title':_0x362c88(0x10e),'text':_0x362c88(0xa8)+_0x2abf05,'confirmButtonColor':_0x362c88(0xde)});});}});}function fetchPedidos(){const _0xc260a9=_0x188cfb,_0x347079=ref(db);get(child(_0x347079,_0xc260a9(0x10b)))[_0xc260a9(0xf9)](_0x5c442f=>{const _0x3d47b1=_0xc260a9;if(_0x5c442f['exists']()){const _0xae4d1a=document[_0x3d47b1(0xdf)](_0x3d47b1(0x10a));_0xae4d1a['innerHTML']='';const _0x1daffc=_0x5c442f[_0x3d47b1(0xd5)](),_0x16007=Object['keys'](_0x1daffc)[_0x3d47b1(0x110)](_0x4b3166=>({'id':_0x4b3166,..._0x1daffc[_0x4b3166]}));_0x16007[_0x3d47b1(0xaf)]((_0x471af2,_0x13ffd0)=>parseDatePTBR(_0x13ffd0[_0x3d47b1(0xd7)])-parseDatePTBR(_0x471af2[_0x3d47b1(0xd7)]));const _0x4c1310=new Date(),_0x4be821=_0x4c1310[_0x3d47b1(0xec)](_0x3d47b1(0xda));_0x16007['forEach'](_0x303fea=>{const _0x512af9=_0x3d47b1;if(_0x303fea['Finalizado'])return;const _0x23af29=formatDateToISO(_0x303fea[_0x512af9(0xcd)]),_0x1ace13=formatDateToISO(_0x4be821),_0x410791=_0x303fea['ParcelasPagas'],_0x771a44=_0x303fea[_0x512af9(0xc8)];let _0x5a8dea='';if(_0x23af29<_0x1ace13)_0x5a8dea='vencido';else _0x23af29===_0x1ace13?_0x5a8dea='hoje':_0x5a8dea='futuro';_0x410791==_0x771a44&&(_0x5a8dea=_0x512af9(0xd4));const _0x217639=(_0x303fea[_0x512af9(0xe8)]/_0x303fea[_0x512af9(0xc8)])[_0x512af9(0xa7)](0x2),_0x34ac9f=document[_0x512af9(0xc5)]('tr');_0x34ac9f[_0x512af9(0x115)]=_0x5a8dea,_0x34ac9f['innerHTML']=_0x512af9(0x9f)+_0x303fea[_0x512af9(0xd7)]+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20data-label=\x22Data\x20do\x20Pagamento\x22>'+_0x303fea[_0x512af9(0xcd)]+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20data-label=\x22Preço\x22>'+_0x303fea[_0x512af9(0xe8)]+_0x512af9(0x12a)+_0x217639+_0x512af9(0xe6)+_0x303fea[_0x512af9(0xc4)]+_0x512af9(0x103)+_0x303fea[_0x512af9(0xf4)]+_0x512af9(0xb8)+_0x303fea[_0x512af9(0xb5)]+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20data-label=\x22Parcelas\x20Pagas\x22>'+_0x303fea[_0x512af9(0xb0)]+_0x512af9(0xbd)+_0x303fea['ParcelasTotais']+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20data-label=\x22Botão\x20Parcela\x22><button\x20class=\x22incrementarParcela\x22\x20data-id=\x22'+_0x303fea['id']+_0x512af9(0x11e)+_0x303fea['id']+_0x512af9(0x129)+_0x303fea['id']+_0x512af9(0xef),_0xae4d1a[_0x512af9(0xa3)](_0x34ac9f);}),document['querySelectorAll'](_0x3d47b1(0xba))[_0x3d47b1(0xe4)](_0x208422=>{const _0x466b11=_0x3d47b1;_0x208422[_0x466b11(0xd3)](_0x466b11(0xd9),()=>incrementarParcela(_0x208422[_0x466b11(0xea)](_0x466b11(0xce))));}),document['querySelectorAll'](_0x3d47b1(0x125))[_0x3d47b1(0xe4)](_0x14bd7b=>{const _0x318efc=_0x3d47b1;_0x14bd7b[_0x318efc(0xd3)](_0x318efc(0xd9),()=>marcarEntrega(_0x14bd7b[_0x318efc(0xea)](_0x318efc(0xce))));}),document[_0x3d47b1(0x102)](_0x3d47b1(0xc7))[_0x3d47b1(0xe4)](_0x25aa7d=>{const _0x289253=_0x3d47b1;_0x25aa7d['addEventListener'](_0x289253(0xd9),()=>finalizarPedido(_0x25aa7d['getAttribute'](_0x289253(0xce))));});}else Swal[_0x3d47b1(0xee)]({'icon':_0x3d47b1(0xab),'title':'Sem\x20pedidos','text':_0x3d47b1(0x109),'confirmButtonColor':'#B93171'});})[_0xc260a9(0xb6)](_0x33f444=>{const _0x43f1e8=_0xc260a9;Swal['fire']({'icon':_0x43f1e8(0x11d),'title':_0x43f1e8(0x10e),'text':_0x43f1e8(0x122)+_0x33f444,'confirmButtonColor':'#B93171'});});}function incrementarParcela(_0x5e251d){const _0x281d72=_0x188cfb,_0x3b4908=ref(db,_0x281d72(0xe7)+_0x5e251d);get(_0x3b4908)[_0x281d72(0xf9)](_0x39fbfd=>{const _0x3c893e=_0x281d72;if(_0x39fbfd[_0x3c893e(0xf5)]()){const _0x40b29d=_0x39fbfd[_0x3c893e(0xd5)](),_0x159b3d=_0x40b29d[_0x3c893e(0xb0)]+0x1;if(_0x159b3d>_0x40b29d[_0x3c893e(0xc8)]){Swal[_0x3c893e(0xee)]({'icon':_0x3c893e(0x10d),'title':_0x3c893e(0x113),'text':_0x3c893e(0xe5),'confirmButtonColor':'#B93171'});return;}const _0x3baab8=addOneMonthToDate(_0x40b29d[_0x3c893e(0xcd)]);update(_0x3b4908,{'ParcelasPagas':_0x159b3d,'DataPagamento':_0x3baab8})[_0x3c893e(0xf9)](()=>{fetchPedidos();})['catch'](_0x40e08d=>{const _0x58e199=_0x3c893e;Swal[_0x58e199(0xee)]({'icon':_0x58e199(0x11d),'title':'Erro','text':_0x58e199(0xae)+_0x40e08d,'confirmButtonColor':'#B93171'});});}})[_0x281d72(0xb6)](_0x3eb67f=>{const _0x18bae3=_0x281d72;Swal[_0x18bae3(0xee)]({'icon':'error','title':'Erro','text':_0x18bae3(0xd0)+_0x3eb67f,'confirmButtonColor':_0x18bae3(0xde)});});}function marcarEntrega(_0xf42bea){const _0x5d3648=_0x188cfb,_0x2697b1=ref(db,_0x5d3648(0xe7)+_0xf42bea);get(_0x2697b1)['then'](_0x2698dd=>{const _0x5ede4e=_0x5d3648;if(_0x2698dd[_0x5ede4e(0xf5)]()){const _0x5b260c=_0x2698dd['val']();_0x5b260c[_0x5ede4e(0xb5)]!=='Feita'?update(_0x2697b1,{'Entrega':_0x5ede4e(0xe3)})[_0x5ede4e(0xf9)](()=>{fetchPedidos();})[_0x5ede4e(0xb6)](_0x1f09f7=>{const _0x1171aa=_0x5ede4e;Swal[_0x1171aa(0xee)]({'icon':_0x1171aa(0x11d),'title':_0x1171aa(0x10e),'text':_0x1171aa(0xd1)+_0x1f09f7,'confirmButtonColor':'#B93171'});}):Swal[_0x5ede4e(0xee)]({'title':_0x5ede4e(0xc9),'text':_0x5ede4e(0xd8),'icon':_0x5ede4e(0xed),'showCancelButton':!![],'confirmButtonColor':_0x5ede4e(0xde),'cancelButtonColor':_0x5ede4e(0xca),'confirmButtonText':_0x5ede4e(0xbc),'cancelButtonText':_0x5ede4e(0x11c)})[_0x5ede4e(0xf9)](_0x420d01=>{const _0x1da511=_0x5ede4e;_0x420d01[_0x1da511(0xdc)]&&update(_0x2697b1,{'Entrega':_0x1da511(0xc2)})[_0x1da511(0xf9)](()=>{fetchPedidos();})['catch'](_0x197c48=>{const _0x479ec9=_0x1da511;Swal[_0x479ec9(0xee)]({'icon':_0x479ec9(0x11d),'title':_0x479ec9(0x10e),'text':_0x479ec9(0xd1)+_0x197c48,'confirmButtonColor':_0x479ec9(0xde)});});});}})[_0x5d3648(0xb6)](_0x561968=>{const _0x40984a=_0x5d3648;Swal['fire']({'icon':_0x40984a(0x11d),'title':'Erro','text':_0x40984a(0xd0)+_0x561968,'confirmButtonColor':_0x40984a(0xde)});});}function finalizarPedido(_0x5bf1f1){const _0xa9578b=_0x188cfb;Swal['fire']({'title':_0xa9578b(0xc9),'text':'Deseja\x20finalizar\x20esse\x20pedido?','icon':'question','showCancelButton':!![],'confirmButtonColor':_0xa9578b(0xde),'cancelButtonColor':_0xa9578b(0xca),'confirmButtonText':_0xa9578b(0xbc),'cancelButtonText':'Não'})[_0xa9578b(0xf9)](_0xfd954c=>{const _0x505340=_0xa9578b;if(_0xfd954c[_0x505340(0xdc)]){const _0x5be859=ref(db,'Pedidos/'+_0x5bf1f1);update(_0x5be859,{'Finalizado':!![]})[_0x505340(0xf9)](()=>{fetchPedidos();})[_0x505340(0xb6)](_0x137137=>{const _0x5709b1=_0x505340;Swal[_0x5709b1(0xee)]({'icon':_0x5709b1(0x11d),'title':_0x5709b1(0x10e),'text':_0x5709b1(0xb4)+_0x137137,'confirmButtonColor':_0x5709b1(0xde)});});}});}document[_0x188cfb(0xdf)]('#envPedido')[_0x188cfb(0xd3)](_0x188cfb(0xd9),insertPedido),document[_0x188cfb(0xd3)](_0x188cfb(0xa9),fetchPedidos);function checkAuthState(){onAuthStateChanged(auth,_0x40ea79=>{const _0x12bba1=_0x7ecb,_0x4e9841=document[_0x12bba1(0x123)]('formContainer'),_0x44895e=document[_0x12bba1(0x123)]('loginMessage');_0x40ea79?(_0x4e9841['style'][_0x12bba1(0xfc)]=_0x12bba1(0x11b),_0x44895e['style'][_0x12bba1(0xfc)]=_0x12bba1(0x11f)):(_0x4e9841[_0x12bba1(0x121)][_0x12bba1(0xfc)]=_0x12bba1(0x11f),_0x44895e[_0x12bba1(0x121)]['display']=_0x12bba1(0x11b));});}window[_0x188cfb(0xd3)](_0x188cfb(0xa9),_0x161202=>{checkAuthState();});function gerarRelatorio(){const _0x34774b=_0x188cfb;Swal['fire']({'title':_0x34774b(0x106),'text':'Deseja\x20gerar\x20o\x20relatório?','icon':_0x34774b(0xed),'showCancelButton':!![],'confirmButtonColor':'#4CAF50','cancelButtonColor':_0x34774b(0xca),'confirmButtonText':_0x34774b(0xbc),'cancelButtonText':_0x34774b(0x11c)})[_0x34774b(0xf9)](_0x5cd0f8=>{const _0xb92211=_0x34774b;if(_0x5cd0f8['isConfirmed']){const _0x8d7ecf=ref(db);get(child(_0x8d7ecf,_0xb92211(0x10b)))[_0xb92211(0xf9)](_0x2e875b=>{const _0x778a6a=_0xb92211;if(_0x2e875b[_0x778a6a(0xf5)]()){const _0x404a18=_0x2e875b['val'](),_0x322377=Object[_0x778a6a(0xa4)](_0x404a18)[_0x778a6a(0x110)](_0x1b601c=>({'id':_0x1b601c,..._0x404a18[_0x1b601c]})),_0x10c655=_0x322377['filter'](_0x420184=>_0x420184[_0x778a6a(0x100)]);_0x10c655['sort']((_0xed346b,_0x31272b)=>parseDatePTBR(_0xed346b[_0x778a6a(0xd7)])-parseDatePTBR(_0x31272b[_0x778a6a(0xd7)]));if(_0x10c655[_0x778a6a(0x128)]===0x0){Swal[_0x778a6a(0xee)]({'icon':_0x778a6a(0xab),'title':_0x778a6a(0xc0),'text':_0x778a6a(0x104),'confirmButtonColor':_0x778a6a(0xde)});return;}const {jsPDF:_0x45b0d0}=window[_0x778a6a(0xbe)],_0x323879=new _0x45b0d0();let _0x32a1d7=0xa,_0x226e25=0x0;_0x323879['setFontSize'](0xc),_0x323879['text'](_0x778a6a(0xf1),0xa,_0x32a1d7),_0x32a1d7+=0xa,_0x10c655[_0x778a6a(0xe4)](_0x75ad41=>{const _0x199ceb=_0x778a6a;_0x323879[_0x199ceb(0xff)]('Data\x20do\x20Pedido:\x20'+_0x75ad41[_0x199ceb(0xd7)],0xa,_0x32a1d7),_0x32a1d7+=0x5,_0x323879[_0x199ceb(0xff)]('Data\x20do\x20Pagamento:\x20'+_0x75ad41['DataPagamento'],0xa,_0x32a1d7),_0x32a1d7+=0x5,_0x323879['text']('Preço:\x20'+_0x75ad41['Preco'],0xa,_0x32a1d7),_0x32a1d7+=0x5,_0x323879[_0x199ceb(0xff)]('Cliente:\x20'+_0x75ad41[_0x199ceb(0xc4)],0xa,_0x32a1d7),_0x32a1d7+=0x5,_0x323879['text'](_0x199ceb(0xeb)+_0x75ad41[_0x199ceb(0xf4)],0xa,_0x32a1d7),_0x32a1d7+=0x5,_0x323879[_0x199ceb(0xff)](_0x199ceb(0xfe)+_0x75ad41[_0x199ceb(0xb5)],0xa,_0x32a1d7),_0x32a1d7+=0x5,_0x323879[_0x199ceb(0xff)](_0x199ceb(0xe0)+_0x75ad41[_0x199ceb(0xb0)],0xa,_0x32a1d7),_0x32a1d7+=0x5,_0x323879[_0x199ceb(0xff)]('Total\x20de\x20Parcelas:\x20'+_0x75ad41[_0x199ceb(0xc8)],0xa,_0x32a1d7),_0x32a1d7+=0xa,_0x226e25+=_0x75ad41[_0x199ceb(0xe8)],_0x32a1d7>0x10e&&(_0x323879[_0x199ceb(0x118)](),_0x32a1d7=0xa);}),_0x323879['text']('Total\x20Preço:\x20'+_0x226e25[_0x778a6a(0xa7)](0x2),0xa,_0x32a1d7),_0x323879[_0x778a6a(0xe9)](_0x778a6a(0xcb)+formatDateToISO(new Date()[_0x778a6a(0xec)](_0x778a6a(0xda)))+_0x778a6a(0xb7));const _0x36caa2={};_0x10c655['forEach'](_0x1f63d0=>{const _0x49d7c3=_0x778a6a;_0x36caa2[_0x49d7c3(0x126)+_0x1f63d0['id']]=null;}),update(ref(db),_0x36caa2)['then'](()=>{const _0x2899a4=_0x778a6a;Swal[_0x2899a4(0xee)]({'icon':'success','title':_0x2899a4(0xfd),'text':_0x2899a4(0xdd),'confirmButtonColor':_0x2899a4(0xde)}),fetchPedidos();})[_0x778a6a(0xb6)](_0x117ea3=>{const _0x4f77d5=_0x778a6a;Swal[_0x4f77d5(0xee)]({'icon':_0x4f77d5(0x11d),'title':_0x4f77d5(0x10e),'text':'Erro\x20ao\x20apagar\x20pedidos\x20finalizados:\x20'+_0x117ea3,'confirmButtonColor':_0x4f77d5(0xde)});});}else Swal[_0x778a6a(0xee)]({'icon':_0x778a6a(0xab),'title':'Sem\x20pedidos','text':_0x778a6a(0x109),'confirmButtonColor':'#B93171'});})[_0xb92211(0xb6)](_0x13977a=>{const _0x27ee22=_0xb92211;Swal['fire']({'icon':_0x27ee22(0x11d),'title':_0x27ee22(0x10e),'text':_0x27ee22(0x122)+_0x13977a,'confirmButtonColor':_0x27ee22(0xde)});});}});}document[_0x188cfb(0xdf)](_0x188cfb(0xcc))[_0x188cfb(0xd3)](_0x188cfb(0xd9),gerarRelatorio);function _0x3cbf(){const _0x38e69d=['.enterNomePeca','toFixed','Erro\x20ao\x20inserir\x20o\x20pedido:\x20','DOMContentLoaded','(((.+)+)+)+$','info','Por\x20favor,\x20preencha\x20todos\x20os\x20campos.','bind','Erro\x20ao\x20atualizar\x20parcelas:\x20','sort','ParcelasPagas','$1/$2','value','trim','Erro\x20ao\x20finalizar\x20pedido:\x20','Entrega','catch','.pdf','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20data-label=\x22Entrega\x22>','696yWnhym','.incrementarParcela','toString','Sim','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20data-label=\x22Parcelas\x20Totais\x22>','jspdf','success','Sem\x20pedidos\x20finalizados','273bIBkUD','Não\x20Entregue','1725035udLziG','Cliente','createElement','Data\x20incorreta','.finalizarPedido','ParcelasTotais','Confirmação','#d33','Relatorio_Pedidos_Finalizados_','#gerarRelatorio','DataPagamento','data-id','search','Erro\x20ao\x20buscar\x20pedido:\x20','Erro\x20ao\x20atualizar\x20entrega:\x20','1015416sRRfSb','addEventListener','finalizado','val','Não\x20Feita','DataPedido','Pedido\x20já\x20entregue.\x20Deseja\x20marcar\x20como\x20não\x20entregue?','click','pt-BR','795487KmCRGF','isConfirmed','Relatório\x20gerado\x20com\x20sucesso!','#B93171','querySelector','Parcelas\x20Pagas:\x20','split','1:1094750666616:web:2497b29ffa37b54afb128d','Feita','forEach','Todas\x20as\x20parcelas\x20já\x20foram\x20pagas.','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20data-label=\x22Cliente\x22>','Pedidos/','Preco','save','getAttribute','Nome\x20da\x20Peça:\x20','toLocaleDateString','question','fire','\x22>Finalizar</button></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','3476NYsmFR','Relatório\x20de\x20Pedidos\x20Finalizados','10kvnYzN','prototype','NomePeca','exists','test','481386NOzEYF','log','then','.enterData','1094750666616','display','Relatório\x20Gerado','Entrega:\x20','text','Finalizado','AIzaSyCX_k3nY6beoI9YlnP1Eqx4Dgh140s_ZZk','querySelectorAll','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20data-label=\x22Nome\x20da\x20Peça\x22>','Nenhum\x20pedido\x20finalizado\x20encontrado.','table','Relatório','#4CAF50','.enterParcelasTotais','Nenhum\x20pedido\x20encontrado.','#pedidosTable\x20tbody','Pedidos','199jMXeNU','warning','Erro','replace','map','Campo\x20vazio','constructor','Parcelas\x20pagas','$1/$2/$3','className','7vjxMgC','return\x20(function()\x20','addPage','Todas\x20as\x20informações\x20estão\x20corretas?','contabelize.firebaseapp.com','block','Não','error','\x22>+1\x20Parcela</button></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20data-label=\x22Botão\x20Entrega\x22><button\x20class=\x22marcarEntrega\x22\x20data-id=\x22','none','contabelize.appspot.com','style','Erro\x20ao\x20buscar\x20pedidos:\x20','getElementById','Pedido\x20inserido','.marcarEntrega','/Pedidos/','apply','length','\x22>Marcar\x20Entrega</button></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20data-label=\x22Finalizar\x20Pedido\x22><button\x20class=\x22finalizarPedido\x22\x20data-id=\x22','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20data-label=\x22Preço\x20Parcela\x22>','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20data-label=\x22Data\x20do\x20Pedido\x22>','exception','3800439rIflBv','{}.constructor(\x22return\x20this\x22)(\x20)','appendChild','keys','__proto__'];_0x3cbf=function(){return _0x38e69d;};return _0x3cbf();}