"use strict";

Vue.component("tab-dt", {
	props: ['title'],
	data: function () {
		return {
			items: global_array_items
		}
	},
	methods: {
		add_item: function () {
			this.items.push({product_name: '',
					 unit_price: 0.0,
					 unit_dimension: '',
					 units_in_stock: 0,
					 discontinued: true});
		},
		delete_item: function (idx) {
			this.items.splice(idx, 1);
		},
	},
	template: `
		<div id="tab-dt"> \
			{{ title }} <br/>\
			<button v-on:click="add_item()">+ Add new record</button> \
			<table> \
				<tr> \
					<th>Product name</th> \
					<th>Unit price</th> \
					<th>Units in stock</th> \
					<th>Discontinued</th> \
					<th></th> \
				</tr> \
				<tr v-for="(item, index) in items"> \
					<td> \
						{{item.product_name}} \
					</td> \
					<td> \
						{{item.unit_price}} {{item.unit_dimension}} \
					</td> \
					<td> \
						{{item.units_in_stock}} \
					</td> \
					<td> \
						{{item.discontinued}} \
					</td> \
					<td> \
						<button v-on:click="$emit('edit', index, item)">Edit</button> \
						<button v-on:click="delete_item(index)">Delete</button> \
					</td> \
				</tr> \
			</table> \
		</div> \
`
});

var appdt = new Vue({
	el: '#dynamic_table',
	data: function () {
		return {
			seen: true,
			fade: false,
		}
	},
	methods: {
		get_item_list: function () {return global_array_items;},
		do_edit: function (index, element) {
			global_index = index;
			global_element = element;

			this.fade = true;
			appei.seen = true;
		}
	}
});
