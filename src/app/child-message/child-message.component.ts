import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
    selector: 'child-cell',
    templateUrl: './child-message.component.html',
    styles: [
        `.btn {
            line-height: 0.5
        }`
    ]
})
export class ChildMessageComponent implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
      debugger;
        this.params = params;
    }

    public invokeParentMethod() {
      // this.params="heloooooo";
      // alert(this.params.data)
      debugger;
      console.log('params : ',this.params)

      console.log('params data : ',this.params.data)

         this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
    
        console.log('params : ',this.params)
      }

      DeleteMethodParent()
      {
        this.params.context.componentParent.Delete(this.params.data.AccountID)
        //.methodFromParent(`Delete Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
        console.log('params Account ID : ',this.params.data.AccountID);

      }

      EditMethodParent()
      {
        debugger;
         this.params.context.componentParent.methodFromParent(this.params.node.rowIndex);
          
       
        // this.params.context.componentParent.EditGrid(this.params.node.rowIndex);
        console.log('params Account ID : ',this.params.node.rowIndex);

      }


    refresh(): boolean {
        return false;
    }
}