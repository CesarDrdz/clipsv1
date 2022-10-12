import { Component, AfterContentInit, ContentChild, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit {
  // must be called as a func
  // this allows us to select components and elements from our content projection we must propety "tabs" provide a value even just an empty object
  // QueryList add a generic to set the type 
  // Adding type safety 
  // the ? will make the new querylist optional
  @ContentChild(TabComponent) tabs?:
    QueryList<TabComponent> = new QueryList()

  constructor() { }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(
      tab => tab.active
    )
    
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first)
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs?.forEach(tab => {
      tab.active = false
    })
    tab.active = true
  }
}
