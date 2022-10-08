import Alpine from "alpinejs";
import copy from "copy-to-clipboard";
import InterfaceIcons from "../fonts/interface.json";
import EcommerceIcons from "../fonts/ecommerce.json";
import DeliveryIcons from "../fonts/delivery.json";
import ElectronicIcons from "../fonts/electronics.json";
import GroceryIcons from "../fonts/grocery.json";
import FashionIcons from "../fonts/fashion.json";

window.Alpine = Alpine;

Alpine.data("klbIcons", () => ({
  search: "",
  tab: "interface",
  copied: {},
  icons: [InterfaceIcons, EcommerceIcons, DeliveryIcons, ElectronicIcons, GroceryIcons, FashionIcons],

  copiedIcon(value) {
    value.closest('.icon-wrapper').classList.add('copied-icon');

    if (value.closest('.icon-wrapper').classList.contains('copied-icon')) {
      setTimeout(() => {
        value.closest('.icon-wrapper').classList.remove('copied-icon');
      }, 2000)
    }
  },

  copyIcon(type, prefix, name) {
    let icon = "";
    const iconName = `${prefix}${name}`; 
    if (type === "html") {
      icon = `<i class="${iconName}"></i>`;
      copy(icon);
    } else {
      copy(iconName);
    }
  },

  tabChange(id) {
    if (this.search !== "") {
      this.search = "";
    }
    this.tab = id;
  },

  get getIcons() {
    if (this.search === "") {
      return this.icons.map((item) => item.glyphs);
    }

    return this.icons.map((item) => item.glyphs.filter((item) => item.css?.includes(this.search.toString().toLowerCase())));
  },

  init() {
    console.log(this.$refs.wrapper)
    /* this.$watch("search", value => {
      this.filterIcons(value);
    }) */
  }
}))

Alpine.start();