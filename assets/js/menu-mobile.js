class MenuMobile {
	constructor(menuMobile, navList, navLinks) {
		this.menuMobile = document.querySelector(menuMobile)
		this.navList = document.querySelector(navList)
		this.navLinks = document.querySelectorAll(navLinks)
		this.activeClass = "active"

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		console.log(this)
		this.navList.classList.toggle(this.activeClass)
	}

	addClickEvent() {
		this.menuMobile.addEventListener("click", this.handleClick)
	}

	init() {
		if (this.menuMobile) {
			this.addClickEvent()
		}
		return this
	}
}

const menuMobile = new MenuMobile(".menu-mobile", ".nav-list", ".nav-list li")

menuMobile.init()
