<template>
	<div class="user_card">
		<template v-if="!edit">
			<div class="image_wrapper">
				<img :src="userData.image" alt="user image" />
			</div>
			<div class="user_information">
				<p>{{ userData.name }} {{ userData.surname }}</p>
				<p>{{ userData.location }}</p>
			</div>
			<button class="edit_button" @click="ToggleEdit">
				<img src="mode_edit_outline_black_24dp.svg" />
			</button>
		</template>
		<template v-else>
			<div class="image_edit_wrapper" @click="UploadImage">
				<img :src="userData.image" class="input_image" />
			</div>
			<input ref="image" class="input_file" type="file" @change="OnFileSelected" />

			<div class="field_wrapper">
				<label for="name">Name:</label>
				<input ref="name" :value="userData.name" type="text" />
			</div>
			<div class="field_wrapper">
				<label for="surname">Surname:</label>
				<input ref="surname" :value="userData.surname" type="text" />
			</div>
			<div class="field_wrapper">
				<label for="location">Office location:</label>
				<input ref="location" :value="userData.location" type="text" />
			</div>

			<div class="buttons">
				<button class="cancel_button" @click="ToggleEdit">cancel</button>
				<button class="save_button" @click="Save">save</button>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	data: () => ({
		edit: false,

		userData: {
			image: 'morty.png',
			name: 'Morty',
			surname: 'Smith',
			location: 'Skopje',
		},
	}),
	methods: {
		ToggleEdit() {
			this.edit = !this.edit
		},
		Save() {
			this.userData = {
				image: this.$refs.image.value,
				name: this.$refs.name.value,
				surname: this.$refs.surname.value,
				location: this.$refs.location.value,
			}
			this.edit = false
		},
		UploadImage() {
			this.$refs.image.click()
		},
		OnFileSelected(e) {
			const files = e.target.files || e.dataTransfer.files
			if (!files.length) {
				return
			}
			this.createImage(files[0])
		},
		createImage(file) {
			const reader = new FileReader()
			// const vm = this

			reader.onload = (e) => {
				this.userData.image = e.target.result
			}
			reader.readAsDataURL(file)
		},
	},
}
</script>

<style lang="scss" scoped>
.user_card {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 50px;

	width: 20rem;

	position: relative;
	border-radius: 20px;
	background: linear-gradient(145deg, $secondary-light, $secondary-dark);
	box-shadow: 20px 20px 60px $secondary-light, -20px -20px 60px $secondary-dark;

	.image_wrapper {
		overflow: hidden;
		border-radius: 50%;
		width: 10rem;
		height: 10rem;
		border: 3px solid $primary;
		margin-bottom: 2rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			display: block;
			&.input_image {
				cursor: pointer;
			}
		}
	}
	.image_edit_wrapper {
		overflow: hidden;
		border-radius: 50%;
		width: 10rem;
		height: 10rem;
		border: 3px dashed $primary;
		margin-bottom: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			display: block;
			&.input_image {
				cursor: pointer;
			}
		}
	}
	.user_information {
		text-align: center;
		p {
			font-size: 1.3rem;
			&:first-child {
				font-weight: 600;
				margin-bottom: 0.5rem;
			}
		}
	}

	.edit_button {
		position: absolute;
		top: 25px;
		right: 25px;
		width: 50px;
		height: 50px;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		transition: opacity 0.2s ease;
		display: flex;
		justify-content: center;
		background-color: $secondary-light;
		align-items: center;
		box-shadow: 20px 20px 60px $secondary-dark, -20px -20px 60px $secondary-light;
		&:hover {
			opacity: 0.5;
		}
		img {
			width: 20px;
			height: 20px;
		}
	}

	.field_wrapper {
		display: flex;
		align-items: center;
		width: 100%;
		margin-bottom: 20px;
		label {
			margin-right: 15px;
			font-weight: bold;
			font-size: 0.8rem;
			width: 30%;
		}
		input {
			height: 20px;
			padding: 15px 20px;
			width: 70%;
			border: none;
			border-radius: 15px;
			color: $text;
			background: $secondary-light;
			box-shadow: inset 20px 20px 60px $secondary-dark, inset -20px -20px 60px $secondary-light;
		}
	}
	.input_file {
		display: none;
	}
	.buttons {
		display: flex;
		justify-content: space-between;

		margin-top: 20px;
		padding: 0 20px;
		width: 100%;

		button {
			padding: 10px 20px;
			width: 48%;
			cursor: pointer;
			background-color: $secondary-light;
			box-shadow: 20px 20px 60px $secondary-dark, -20px -20px 60px $secondary-light;
			border: none;
			border-radius: 20px;
			font-size: 1.3rem;
			text-transform: capitalize;
			line-height: 35px;
			&:hover {
				color: rgba($text, 0.6);
			}
			&.cancel_button {
				color: $primary;
			}
			&.save_button {
				color: #008a5c;
			}
		}
	}
}
</style>
