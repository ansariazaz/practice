import {useEffect,useRef} from 'react'

const useCustomMemo = (cb, deps)=>{

    const areEqual = (prevDeps, nextDeps)=>{
       if(prevDeps ===null) return false;
       if(prevDeps.length !==nextDeps.length) return false;

       for (let i = 0; i < prevDeps.length; i++) {
         if(prevDeps[i] !== nextDeps[i]){
            return false
         }
       }
       return true
    }
   //state
  const memoizedRef = useRef() 
   //logic
    if(!memoizedRef.current || !areEqual(memoizedRef.current.deps,deps)){
       memoizedRef.current ={
        value:cb(),
        deps
       }
    }
   //cleanup
    useEffect(() => {
    
      return () => {
        memoizedRef.current= null
      }
    }, [])
    
   //return

   return memoizedRef.current.value
}

export default useCustomMemo