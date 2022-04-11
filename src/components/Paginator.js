import React from 'react';
import { View } from 'dripsy';

const Paginator = ({data, currentIdx}) => {

  return ( 
    <View 
      sx={{flexDirection: 'row', height: 80, justifyContent: 'center', alignItems: 'center'}}>
        {
          data.map((_, idx)=> {
            return <View key={idx.toString()}
              sx={{height: 17, borderRadius: 50, backgroundColor: currentIdx === idx ? '#493d8a' : 'rgb(240, 240, 240)', marginX: 2, width: currentIdx === idx ? 35 : 17}}
              />
          })
        }
    </View>
  );
}

export default Paginator;