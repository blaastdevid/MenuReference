var _ = require('common/util');
var TextView = require('ui').TextView;
var HLayout = require('ui').HLayout;
var Control = require('ui').Control;

/*
var MenuItem = TextView.extend({
	initialize: function(label, id) {
		MenuItem.__super__.initialize.call(this);
		this.label(label);
		this.id = id;
		this.style({ color: '#888' });
	},

	setFocus: function(focus) {
		if (focus) {
			this.style({ color: '#fff', 'font-weight': 'bold' });
		} else {
			this.style({ color: '#888', 'font-weight': 'normal' });
		}
	},

	select: function() {
		console.log("Selected " + this.id);
		app.pushView(this.id);
	}
});
*/

var MenuItem = HLayout.extend({
	initialize: function(label, id) {
		MenuItem.__super__.initialize.call(this);

		this.style({ width: 'fill-parent', 'background-color': '#666' });
		this.text = new TextView();
		this.text.label(label);
		this.text.style({ color: '#fff', border: '5 5 5 5' });

		this.top = new Control();
		this.top.style({ width: 'fill-parent', height: 1, 'background-color': '#ccc' });
		
		this.add(this.top);
		this.add(this.text);

		this.id = id;
	},

	setFocus: function(focus) {
		if (focus) {
			this.style({ 'background-color': '#888' });
		} else {
			this.style({ 'background-color': '#555' });
		}
	},

	select: function() {
		console.log("Selected " + this.id);
		app.pushView(this.id);
	}
});


_.extend(exports, {
	':load': function() {
		console.log('View was loaded');

//		var item = new TextView();
//		item.label('Hello');
//		item.style({ color: 'red' });
//		this.add(item);

		this.add(new MenuItem('Hello 1', 'one'));
		this.add(new MenuItem('Hello 2', 'two'));
		this.add(new MenuItem('Hello 3', 'three'));
		this.add(new MenuItem('Hello 4', 'four'));
		this.add(new MenuItem('Hello 5', 'five'));
		this.add(new MenuItem('Hello 6', 'three'));
		this.add(new MenuItem('Hello 7', 'three'));
		this.add(new MenuItem('Hello 8', 'three'));
		this.add(new MenuItem('Hello 9', 'three'));
		this.add(new MenuItem('Hello 10', 'three'));
		this.add(new MenuItem('Hello 11', 'three'));

		this.setFocusedItem(0);
	},

	focusedItem: -1,

	':keypress': function(key) {
		console.log('Key press: ' + key);
	
		if (key === 'up') {
			this.setFocusedItem(this.focusedItem - 1);
		}

		if (key === 'down') {
			this.setFocusedItem(this.focusedItem + 1);
		}

		if (key === 'fire') {
			this.get(this.focusedItem).select();
		}
	},

	setFocusedItem: function(item) {
		if (item < 0) {
			item = 0; 
		}
		if (item >= this.size()) {
			item = this.size() - 1;
		}
		this.get(this.focusedItem).setFocus(false);
		this.focusedItem = item;
		this.get(this.focusedItem).setFocus(true);

		this.scrollTo(this.focusedItem);
	}
});
