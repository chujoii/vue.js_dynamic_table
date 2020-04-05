"use strict";

Vue.component("tab-ei", {
	props: ['title'],
	data: function () {
		return {
			product_name: global_element.product_name,
			unit_price: global_element.unit_price,
			unit_dimension: global_element.unit_dimension,
			units_in_stock: global_element.units_in_stock,
			discontinued: global_element.discontinued,
		}
	},
	template: `
		<div id="tab-ei"> \
			{{ title }} \
			<ul> \
				<li> \
					<div class="left">Product name</div> \
					<div class="right"><input id="product_name" v-model="product_name" type="text" /></div> \
				</li> \
				<li> \
					<div class="left">Unit price</div> \
					<div class="right"><input id="unit_price" v-model="unit_price" type="number" step="0.01" /></div> \
				</li> \
				<li> \
					<div class="left">Unit dimension</div> \
					<div class="right"><input id="unit_dimension" v-model="unit_dimension" type="text" /></div> \
				</li> \
				<li> \
					<div class="left">Units in stock</div> \
					<div class="right"><input id="units_in_stock" v-model="units_in_stock" type="number" /></div> \
				</li> \
				<li> \
					<div class="left">Discontinued</div> \
					<div class="right"><input id="discontinued" v-model="discontinued" type="checkbox"></div> \
				</li> \
			</ul> \
			<button v-on:click="$emit('edit', {product_name: product_name, unit_price: unit_price, unit_dimension: unit_dimension, units_in_stock: units_in_stock, discontinued: discontinued})">Update</button> \
			<button v-on:click="$emit('esc')">Cancel</button> \
		</div> \
`
});

var appei = new Vue({
	el: '#edit_item',
	data: function () {
		return {
			seen: false,
		}
	},
	methods: {
		do_update: function (selected) {
			global_array_items[global_index] = selected;
			this.seen = false;
			appdt.fade = false;

			this.do_rerender(); // fixme: global variable updated
		},
		do_esc: function () {
			this.seen = false;
			appdt.fade = false;
		},
		do_rerender: function() {
			appdt.seen = false
			appdt.$nextTick(() => {
				appdt.seen = true
				console.log('re-render start')
				appdt.$nextTick(() => {
					console.log('re-render end')
				})
			})
		}
	}
});
