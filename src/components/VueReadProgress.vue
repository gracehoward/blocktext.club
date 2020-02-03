// Modified from https://github.com/ajerez/vue-read-progress

<template>
	<div class="read-progress-container">
		<span
			class="read-progress-bar"
			:class="{ 'with-shadow': shadow }"
			:style="{
				width: readProgress + '%',
				color: color,
				height: height,
				opacity: opacity,
				backgroundColor: color
			}"
		></span>
	</div>
</template>

<script>
export default {
	name: "VueReadProgress",
	props: {
		color: {
			type: String,
			default: "#506888"
		},
		height: {
			type: String,
			default: "4px"
		},
		opacity: {
			type: [String, Number],
			default: 1
		},
		shadow: {
			type: Boolean,
			default: true
		},
		// TODO: customize position of progress bar
		// if position = top, bottom left, right
		position: {
			type: String,
			default: "top"
		}
	},
	data() {
		return {
			readProgress: 0
		};
	},
	created() {
		if (process.browser) {
			window.addEventListener("scroll", this.updateReadProgress);
		}
	},
	beforeDestroy() {
		if (process.browser) {
			window.removeEventListener("scroll", this.updateReadProgress);
		}
	},
	methods: {
		updateReadProgress() {
			if (process.browser) {
				this.readProgress = this.currentScrollPosition(window.scrollY);
			}
		},
		currentScrollPosition(position) {
			if (process.browser) {
				return (
					(position /
						(document.body.clientHeight -
							document.documentElement.clientHeight)) *
					100
				);
			} else {
				return 0;
			}
		}
	}
};
</script>

<style scoped lang="scss">
@import "../assets/style/_variables.scss";

.read-progress-container {
	// position = right
	width: 100%;
	background-color: transparent;
	position: fixed;
	display: block;
	z-index: 9999;
	top: 0;
	right: -50%;
	transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	-webkit-transform: rotate(90deg);

	// TODO: customize position of progress bar
	.top {
		top: 0;
		left: 0;
	}
	.bottom {
		bottom: 0;
		left: 0;
	}
	.left {
		top: 0;
		left: -50%;
		transform: rotate(90deg);
		-ms-transform: rotate(90deg);
		-webkit-transform: rotate(90deg);
	}
	.right {
		top: 0;
		right: -50%;
		transform: rotate(90deg);
		-ms-transform: rotate(90deg);
		-webkit-transform: rotate(90deg);
	}

	.read-progress-bar {
		display: block;
		width: 0%;
		height: inherit;
		&.with-shadow {
			box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
		}
	}
}

@media screen and (max-width: $small) {
	// position = top
	.read-progress-container {
		top: 0;
		left: 0;
		transform: none;
	}
}
</style>
