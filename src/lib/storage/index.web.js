import Storage from 'react-native-storage';

let storage;
function tryToCreateStoreInstance(storageBackend,error){
  var instance;
  try{
    instance = new Storage({
      size: 1000,
      storageBackend:storageBackend,
      defaultExpires: 1000 * 3600 * 24,
    });
  }catch(e){
      storageBackend&&error&&error();
  }
  if(instance){
      storage = instance;
  }
}
tryToCreateStoreInstance(window.localStorage,()=>{
  // 在无痕浏览的模式下storageBackend走内存
  tryToCreateStoreInstance(null)
})

export default storage;