Search.setIndex({docnames:["advanced","amp","fp16_utils","index","layernorm","optimizers","parallel"],envversion:53,filenames:["advanced.rst","amp.rst","fp16_utils.rst","index.rst","layernorm.rst","optimizers.rst","parallel.rst"],objects:{"apex.amp":{initialize:[1,1,1,""],master_params:[1,1,1,""],scale_loss:[1,1,1,""]},"apex.fp16_utils":{DynamicLossScaler:[2,2,1,""],FP16_Optimizer:[2,2,1,""],LossScaler:[2,2,1,""],master_params_to_model_params:[2,1,1,""],model_grads_to_master_grads:[2,1,1,""],prep_param_lists:[2,1,1,""]},"apex.fp16_utils.FP16_Optimizer":{backward:[2,3,1,""],clip_master_grads:[2,3,1,""],inspect_master_grad_data:[2,3,1,""],load_state_dict:[2,3,1,""],state_dict:[2,3,1,""],step:[2,3,1,""],update_master_grads:[2,3,1,""],zero_grad:[2,3,1,""]},"apex.normalization":{FusedLayerNorm:[4,2,1,""]},"apex.optimizers":{FusedAdam:[5,2,1,""]},"apex.optimizers.FusedAdam":{step:[5,3,1,""]},"apex.parallel":{DistributedDataParallel:[6,2,1,""],Reducer:[6,2,1,""],SyncBatchNorm:[6,2,1,""],convert_syncbn_model:[6,1,1,""]},apex:{amp:[1,0,0,"-"],fp16_utils:[2,0,0,"-"],normalization:[4,0,0,"-"],optimizers:[5,0,0,"-"],parallel:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method"},terms:{"1e7":6,"boolean":[4,5,6],"case":[0,2],"catch":6,"class":[0,1,2,4,5,6],"default":[1,2,4,5,6],"final":[0,2],"float":[0,1,2,5,6],"function":1,"import":[2,6],"int":[1,2,4,6],"long":[0,1,2],"new":[1,2],"return":[0,1,2,5],"static":[1,2],"switch":[1,6],"true":[0,1,2,4,5,6],"try":1,"while":1,But:0,For:[0,2,6],NOT:5,One:1,The:[0,1,2,3,4,6],These:[0,1,2],Use:2,With:4,__init__:0,_batchnorm:6,abov:[1,2],acceler:1,accept:[0,1,2],access:[0,1,2],accompani:1,accomplish:0,accord:1,accordingli:1,accumul:[1,2],accuraci:[1,6],achiev:[1,6],across:[1,6],act:1,activ:[1,4],adam:5,adapt:1,add:[1,5],added:[4,5,6],adding:5,addit:[0,1,2,5,6],adher:1,adjust:[1,2],advanc:2,affect:[1,2],affin:[4,6],after:[0,1,2,6],again:1,against:[1,2],algorithm:5,all:[0,1,2,6],allow:[1,2,6],allreduc:6,allreduce_always_fp32:6,allreduce_trigger_param:6,alreadi:[0,1],also:[0,1,2,6],although:2,alwai:[2,6],amp:3,amp_handl:1,amsgrad:5,analog:2,ani:[0,1,2,6],annoi:[1,2],annot:1,anoth:[2,6],anyth:1,api:[0,3],appli:[1,2,4,5,6],applic:[1,6],appropri:[0,1],arg:[1,2,6],argument:[0,1,2,6],around:[1,6],asid:1,aspect:1,assign:0,associ:2,assum:[0,2,6],attempt:[1,2],attribut:[1,2],autograd:1,automat:[1,3,6],avail:3,averag:[5,6],back:6,backward:[1,2,6],base:1,baselin:1,batch:[1,4,6],batch_norm:6,batchnorm:[1,6],batchnormnd:6,batchsiz:6,becaus:[1,2],becom:[1,2],been:[0,2,5],befor:[0,1,2,5,6],begin:[1,2,6],behav:[1,2],behavior:2,being:[1,2,6],belong:2,below:[0,1,2],benefici:1,benefit:1,best:1,beta:5,between:1,beyond:5,bia:[4,5],bias:4,bias_correct:5,blacklist:1,bodi:1,bool:[1,2,6],both:[1,4,6],broadcast:6,bucket:6,buffer:1,build:1,calcul:4,call:[0,1,2,6],callabl:5,came:[2,6],can:[1,2,3,6],captur:1,care:2,carri:6,cast:[0,1],cast_model_typ:1,castabl:0,certain:[2,4],chang:[1,2],channel:[4,6],channel_last:6,check:[0,1,2],checkpoint:2,children:6,choos:[1,2],chosen:1,cleanup:6,clip:[1,2],clip_grad_norm:2,clip_grad_norm_:0,clip_grad_value_:0,clip_master_grad:2,closur:[2,5],code:[0,3],coeffici:5,coincid:0,collect:[0,6],com:[1,3,6],combat:2,combin:[1,6],commonli:1,commun:6,compar:1,compat:2,comprehens:[0,1],comput:[2,4,5,6],conceptu:2,consecut:2,consid:0,construct:[0,1,2],constructor:[2,6],contain:[0,2,3,6],context:[0,1],control:[1,2,6],converg:[5,6],convers:1,convert:[1,2,6],convert_syncbn_model:6,convolut:1,copi:[1,2,5],core:1,correct:[0,2,5],correspond:[1,2],could:1,cpp_ext:5,creat:[0,1,2,6],criterion:2,cross:[1,2],cuda:[0,1,2,4,6],cuda_ext:5,cudnn:1,cumul:6,current:[1,2,4,5],custom:1,customdata:0,d_in:[1,2],d_out:[1,2],data:[1,2,4,6],dataset:2,date:3,dcgan:1,ddp:6,decai:5,declar:1,def:[0,2],defin:[1,2,5],definit:6,delai:[2,6],delay_allreduc:6,delay_unscal:[0,1],delet:1,demo:2,demonstr:[1,2],denomin:[4,5,6],depend:[0,2],deprec:1,describ:4,design:[2,6],desir:1,detail:[1,2,6],detect:2,deviat:4,devic:0,dict:[2,5],differ:[0,1,2],dimens:[4,6],diminish:6,direct:1,directli:[0,1,2],disabl:[1,2,6],distinct:0,distribut:[1,2,3,6],distributeddataparallel:[1,2,6],diverg:0,divid:[2,5],divis:6,docstr:2,document:[1,3],doe:[0,1,6],doesn:[0,1],don:[0,1],downscal:2,drawn:6,drill:0,dtype:[0,1],dure:[0,1,2,6],duti:1,dynam:[1,2,6],dynamic_loss_arg:2,dynamic_loss_scal:[1,2],dynamiclossscal:2,each:[0,1,2,4],earlier:[1,2],easi:6,easier:1,easili:[1,6],edg:2,effect:[1,6],effici:2,either:[1,2,6],element:[1,2,4,6],elementwise_affin:4,elimin:2,els:[0,1],enabl:[1,2,6],encount:2,encourag:[0,1],end:[2,6],enhanc:1,entir:4,entranc:1,entropi:2,epoch:2,eps:[4,5,6],eps_inside_sqrt:5,equival:1,error:1,establish:1,estim:5,etc:2,eval:6,evalu:[4,5,6],even:1,eventu:3,everi:[0,6],everyth:1,exactli:1,exampl:[0,1,2,4,6],except:0,exhaust:1,exist:[1,2],exit:[0,1],expect:[1,2,4,5,6],experi:1,explain:1,explan:1,explicit:1,expos:1,exposur:0,express:[0,1],extent:6,factor:[2,5],fall:6,fals:[1,2,4,5,6],file:[1,2],finer:1,finish:1,first:[0,2,6],fix:1,flag:1,flat_mast:2,flatten:2,float16:[0,1],float32:[0,1],floattensor:0,flow:[1,2],fly:1,follow:[0,1,2],foral:2,format:1,formerli:1,forward:[0,1,2],found:[1,2,3],fp16:[0,2,6],fp16_optim:2,fp16_optimizer_inst:2,fp16_optimizer_obj:2,fp16_util:1,fp32:[0,2,6],fp32_loss:2,free:1,fresh:2,friendli:1,from:[0,1,2,4,5,6],full:[2,6],fulli:0,further:1,fuse:3,fused_layer_norm:3,fusedadam:5,fusedlayernorm:4,futur:1,gan:1,gemm:1,gener:[0,1,2],generaliz:0,github:[1,2,3,6],give:[1,6],given:[0,1,2,6],good:1,govern:1,gpu:[5,6],grad:[1,2,5,6],grad_norm:5,gradient:[1,2,5,6],gradient_averag:6,gradient_average_split_factor:6,gradient_predivide_factor:6,grain:1,group:[2,5,6],gtc:2,guarante:[0,2],had:1,half:[1,2,5],hand:1,handl:2,has:[0,2,4,5,6],have:[0,1,2,4,5],help:[1,6],here:[1,3],high:[2,6],higher:2,highest:2,honor:1,hood:1,host:0,how:[0,1,2],howev:[0,1,2],http:[1,3,6],hyperparamet:2,ident:2,ignor:6,illustr:1,imagenet:[1,2,6],immedi:2,implement:[1,2,5],improv:[1,5,6],includ:3,incom:[0,1],increas:[2,6],incur:2,index:3,indirectli:2,inf:[1,2],infer:1,infin:2,inform:2,ingest:2,init:1,init_optim:2,init_scal:2,initi:[0,1,2,4,6],inp:6,input:[0,1,2,4,6],insert:1,inspect:2,inspect_master_grad_data:2,instal:[3,5],instanc:[0,2,4,6],instead:[0,1,5,6],instruct:[1,3],integ:4,intend:[1,2,6],intent:[0,3],interact:2,interest:0,intern:2,interpret:1,inttensor:0,invok:0,iron:2,isn:1,issu:1,iter:[1,2,5,6],iters_to_accumul:0,its:[1,5,6],juici:0,just:[0,1],keep:1,keep_batchnorm_fp32:1,kei:2,keyword:1,kick:6,know:0,kwarg:[1,2],larg:2,last:[0,4,6],later:[0,2],launch:6,launcher:6,layer:[3,4,6],learn:[2,5],learnabl:[4,6],leav:2,legal:0,less:2,let:[1,6],level:[0,1],light:1,like:[0,1,6],line:[1,2],linear:[1,2],list:[0,1,2,4,5,6],live:1,load:2,load_state_dict:2,logic:0,longer:[1,2],loss1:[0,2],loss2:[0,2],loss3:0,loss:[0,1,5],loss_fn:2,loss_scal:[1,2],lossscal:2,lot:1,lower:2,made:2,mai:[0,1,2],main_reduc:6,maintain:[1,3],make:[1,3,6],manag:[0,1],mani:1,manipul:2,manner:2,manual:[0,1,6],map:6,master:[0,1,6],master_param:[0,1,2],master_params_to_model_param:2,master_weight:1,match:[0,1,2],matter:1,max:2,max_:0,max_grad_norm:5,max_norm:[0,2],maximum:2,mean:[2,4,6],meat:0,message_s:6,method:[0,1,5],might:2,mini:[4,6],minibatch:2,minimum:6,mix:[2,3,6],mixtur:2,mode:[1,4,6],model1:[0,1],model2:[0,1],model:[1,2,5,6],model_grads_to_master_grad:2,model_param:2,modifi:[1,2],modul:[1,2,3,4,6],module_or_grads_list:6,moment:5,momentum:6,more:[1,2],most:[0,2],move:[0,1,6],mse:2,mul_:6,multi:6,multi_gpu:2,multipl:[1,2,6],multiprocess:6,must:[0,1,2],naiv:2,name:[1,2],namespac:1,nan:1,nccl:6,ndarrai:0,necessari:[1,2],need:[0,1,2],neither:1,network:[2,6],neural:2,never:[0,1],new_loss_scal:2,newli:[0,2],node:6,non:0,none:[1,2,5,6],nonintuit:2,norm:[2,3],norm_typ:2,normal:[1,3,6],normalized_shap:4,note:[0,2],now:[0,1],nproc_per_nod:6,num_featur:6,number:[1,2,4,6],numer:[4,5,6],numpi:0,nvidia:[1,2,3,6],object:[0,2],occur:[0,2],off:6,often:1,old:0,omit:6,onc:[1,2],one:[1,2,6],ones:[2,4],onli:[1,2,4,5],oper:2,oppos:6,ops:1,opt:[0,1],opt_level:0,optim1:[0,1],optim2:[0,1],optim:[1,2,3,6],option:[1,2,4,5,6],ordinari:2,organ:2,origin:[0,1,2,5],orthogon:2,other:[1,2],otherwis:0,out:[1,2,5,6],output:[0,1,2,4,5],output_param:5,outsid:0,over:[0,1,2,4,6],overflow:2,overlap:6,overrid:[1,2],overridden:1,own:[0,1],ownership:2,packag:6,page:[1,2],paper:[4,5],parallel:[2,3],param:[0,1,5],param_group:[0,1,2],paramet:[0,1,4,5,6],partial:[0,6],particip:6,particular:[1,2],pass:[1,2,6],patch:[0,1],patch_torch_funct:1,pattern:0,penalti:5,peopl:1,per:[1,4,6],perfom:6,perform:[1,2,5,6],place:[1,2],plane:4,pleas:1,point:[0,1],possibl:[0,1,2,3],post:6,potenti:1,practic:[0,1,2],pre:6,precis:[2,3,5,6],preexist:2,prep_param_list:2,presenc:0,present:[1,2],prevent:1,previous:[1,2],principl:1,print:2,prior:2,problem:2,process:6,process_group:6,product:1,proof:1,proper:6,properli:2,propos:5,provid:2,pth:2,pure:1,python:[0,1,2,5],pytorch:2,quick:3,quickli:3,rais:1,randn:[4,6],rang:6,rank:6,rate:[2,5],rather:1,raw:0,readi:0,readjust:2,readm:1,real:2,reason:2,recast:1,receiv:[2,6],recent:2,recip:2,recogn:[0,1],recommend:[2,6],recurs:6,reduc:[5,6],reducer_inst:6,reduct:6,redund:2,reevalu:5,refer:2,referenc:2,regard:2,regardless:[0,1],regist:0,regular:5,relat:1,remain:[1,6],rememb:2,remov:1,render:1,replac:[0,1,2,6],repres:1,request:1,requir:[0,1,2,5,6],reserv:[1,2],respect:1,respons:[2,6],rest:1,result:2,retain_allreduce_buff:6,retain_graph:2,retriev:[0,2],retun:2,review:1,rewrit:1,ride:2,right:[1,2],risk:1,root:5,run:[1,2,4,5,6],runnabl:[1,2],running_mean:6,running_var:6,safe:0,safeti:2,same:[0,1,2,4,5,6],saniti:2,save:2,sbn:6,scalar:[1,4],scale:[0,1,4,5,6],scale_factor:2,scale_loss:[0,1],scale_window:2,scaled_loss:[0,1,2],schedul:2,script:[0,1,2,6],second:[2,5],see:[1,2],select:1,self:[0,2],send:[0,1],sens:1,separ:[1,4],session:2,set:[0,1,2,4,6],set_devic:6,set_grads_to_non:2,setup:5,sever:[0,6],sgd:[1,2],shape:[2,4],shared_param:6,shell:0,should:[0,1,2,6],show:6,side:0,similar:6,similarli:0,simpl:[2,6],simpli:1,singl:[0,2,4,5,6],singleton:4,site:3,situat:1,size:[4,6],skip:2,small:[1,6],smaller:[2,6],softmax:1,some:[2,3,6],sourc:[1,2,4,5,6],special:1,specif:4,specifi:[1,4],speed:1,speedup:1,squar:5,stabil:[1,4,5,6],standard:[2,4],start:[1,3],stat:6,state:[1,2],state_dict:2,static_loss_scal:2,statist:[4,6],step:[0,1,2,5],still:[0,1,2,6],stochast:5,store:2,str:1,streamlin:[2,3],stress:6,string:1,strongli:1,subject:1,submodul:2,subtl:2,subtleti:1,suppli:[1,2,6],support:[1,5],suppress:1,sure:6,sync:6,sync_bn_model:6,syncbatchnorm:6,synchron:6,synthesi:0,take:[2,6],target:2,technic:2,tell:0,tensor:[0,1,2,4,5,6],term:5,than:1,thei:[0,1,2,6],them:[0,1,2],themselv:1,theori:2,therefor:1,thi:[0,1,2,3,4,5,6],thing:[1,2],those:[0,2],three:1,through:[0,1],time:[1,2],toggl:6,tool:1,topic:[0,1],torch:[0,1,2,4,5,6],total:[2,6],touch:0,tough:0,track:6,track_running_stat:6,train:[2,3,4,6],transfer:6,transform:4,transpar:2,travers:6,treat:4,treatment:1,tree:[1,6],tricki:1,truth:2,tupl:[2,5],turn:2,two:[0,2,4],type:[1,2,5],typic:[0,1],under:[0,1],underflow:2,underli:2,understand:2,uniqu:2,unless:1,unlik:[1,4,6],unnecessari:2,unscal:[0,1],unspecifi:2,until:[0,2],unus:1,unwrap:0,updat:[0,1,2,5],update_master_grad:2,upstream:[3,6],usag:[1,6],use:[0,2,5,6],used:[1,2,4,5,6],useful:[1,2,6],user:[2,3,6],uses:[0,1,4,6],using:[1,2,6],usual:[1,2],util:[0,2,3],valid:2,valu:[1,2,4,5,6],varianc:6,variant:5,variou:1,vector:2,verbos:[1,2],veri:2,versatil:1,version:1,via:[0,2,5],view:2,wai:[1,2],wait:[2,6],want:[0,2],weight:[1,2,4,5],weight_decai:5,well:[1,2],were:1,what:1,whatev:0,when:[2,4,6],whenev:[0,6],where:[1,6],wherev:0,whether:[5,6],which:[0,1,2,4,6],whitelist:1,whose:2,wide:6,within:[0,1,2,6],without:[0,1,2,4],won:0,word_language_model:2,work:[0,2,6],world:6,would:6,wrap:[0,2,6],wrapper:[1,6],written:5,yield:1,you:[0,1,2,6],your:[0,1,2,6],zero:[2,4],zero_grad:[0,2]},titles:["Advanced Amp Usage","apex.amp","apex.fp16_utils","Apex (A PyTorch Extension)","apex.normalization.fused_layer_norm","apex.optimizers","apex.parallel"],titleterms:{"case":1,"function":[0,6],For:1,accumul:0,across:0,advanc:[0,1],amp:[0,1],apex:[1,2,3,4,5,6],api:1,autograd:0,automat:2,backward:0,batch:0,clip:0,conserv:1,custom:0,data:0,defin:0,desir:0,extens:3,fast:1,forc:0,fp16:1,fp16_optim:1,fp16_util:2,fp32:1,fused_layer_norm:4,gan:0,gradient:0,guid:1,indic:3,iter:0,layer:0,loss:2,manag:2,manual:2,master:2,mix:1,model:0,multipl:0,normal:4,old:1,opt_level:1,optim:[0,5],parallel:6,param:2,paramet:2,particular:0,pass:0,per:0,precis:1,properti:1,pytorch:3,scale:2,tabl:3,train:1,transit:1,type:0,unifi:1,usag:0,use:1,user:[0,1],util:6}})