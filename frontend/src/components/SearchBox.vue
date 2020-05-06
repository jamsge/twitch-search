<template>
	<div>
		<b-input-group>
			<b-form-input @keyup.enter.native="emitToParent" v-model="value" size="lg" placeholder="Twitch Name" id="input"></b-form-input>
			<b-input-group-append>
				<b-button @click="emitToParent" size="lg" variant="outline-success" id="submit">Submit</b-button>
			</b-input-group-append>
		</b-input-group>
	</div>
</template>

<script>
	export default {
		data(){
			// "value" is bound to the input
			return { value: '' }
		},
		methods: {
			// called on submission, emits childToParent event while also passing whatever's in input as a payload
			emitToParent () {
				this.$emit('childToParent', this.value)
			}
		}
	}
</script>

<style>
#submit {
}
#input{
}
</style>
