function Tab (node, obj){
  this.container = node;
  this.tab = this.container.getElementsByTagName('input');
  this.box = this.container.getElementsByTagName('div');
  this.ChangeTabBgc = obj.ChangeTabBgc;
  this.ChangeTabColor = obj.ChangeTabColor;
}

Tab.prototype = {
    constructor: Tab,
    init: function(){
      this.bind();
    },
    bind: function(){
      this.tab[0].style.bakcgroundColor = this.ChangeTabBgc;
      this.box[0].style.display = 'block';
      var that = this;
      for(var i = 0; i < this.tab.length; i++){
        this.tab[i].index = i;
        this.tab[i].onclick = function(){
          that.change(this);
        };
      }
    },
  change: function(obj){
    for(var i = 0; i < this.tab.length; i++){
      this.tab[i].style.color = '';
      this.tab[i].style.backgroundColor = '';
      this.box[i].style.display = 'none';
    }
    obj.style.backgroundColor = this.ChangeTabBgc;
    this.box[obj.index].style.display = 'block';
    obj.style.color = this.ChangeTabColor;
  }
};

var tab1 = new Tab(document.querySelectorAll('.tab-container')[0], {
  ChangeTabBgc: 'yellowgreen',
  ChangeTabColor: '#fff'
});
 
var tab2 = new Tab(document.querySelectorAll('.tab-container')[1], {
  ChangeTabBgc: 'pink',
  ChangeTabColor: '#fff'
});


tab1.init();
tab2.init();





