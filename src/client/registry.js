Vue.component("tab-dt", {
	props: ['title', 'items'],
	data: function () {
		return {
			picked: '',
			list_of_regs: ['0.1','0.2']
		}
	},
	template: `
		<div id="tab-dt"> \
			{{ title }} \
			<button v-on:click="$emit('add')">Add</button> \
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
						<button v-on:click="$emit('edit', index)">Edit</button> \
						<button v-on:click="$emit('delete', index)">Delete</button> \
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
		}
	},
	methods: {
		get_item_list: function () {return array_items;},
		do_add: function () {
			console.log("add empty");
			this.seen = false;
		},
		do_edit: function (selected) {
			console.log(selected);
			this.seen = false;
		},
		do_delete: function (selected) {
			console.log(selected);
			this.seen = false;
		}
	}
});
