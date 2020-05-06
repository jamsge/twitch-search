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
			return { value: '' }
		},
		methods: {
			// Define the method that emits data to the parent as the first parameter to `$emit()`.
			// This is referenced in the <template> call in the parent. The second parameter is the payload.
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
