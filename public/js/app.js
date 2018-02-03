const api = 'http://localhost:8080/api/';

const app = new Vue({
	el: '#app',
	data() {
		return ({
			data: '',
			key: '',
			output: 'Placeholder',
			outputTag: 'Title',
			outputActive: false
		})
	},
	methods: {
		generate() {
			this.key = (Math.random() + 1).toString(36).substring(7);
		},
		encrypt() {
			this.outputActive = false;

			fetch(api + 'enc/?data=' + this.data + '&key=' + this.key)
				.then(data => data.json())
				.then(parsed => {
					this.outputActive = parsed.data ? true : false;

					this.output = parsed.data;
					this.outputTag = "Encrypted data";
				})
				.catch(() => {
					this.outputActive = true;

					this.output = 'An error ocurred'
					this.outputTag = "Error";
				});
		},
		decrypt() {
			this.outputActive = false;

			fetch(api + 'dec/?data=' + this.data + '&key=' + this.key)
				.then(data => data.json())
				.then(parsed => {
					this.outputActive = parsed.data ? true : false;

					this.output = parsed.data;
					this.outputTag = "Decrypted data";
				})
				.catch(() => {
					this.outputActive = true;

					this.output = 'An error ocurred'
					this.outputTag = "Error";
				});
		}
	}
});
