import { deserialize, deserializeAs, deserializeIndexable, Deserialize } from 'cerialize';

class Leaf {
    @deserialize public color : string;
    @deserialize public blooming : boolean;
    @deserializeAs(Date) public bloomedAt : Date;
  }
  
  class Bark {
    @deserialize roughness : number;
  }
  
export class Tree {
    @deserialize public species : string; 
    @deserializeAs(Leaf) public leafs : Array<Leaf>;  //arrays do not need extra specifications, just a type.
    @deserializeAs(Bark, 'barkType') public bark : Bark;  //using custom type and custom key name
  }