class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/ `
            <footer class="footer mt-8 py-10 pb-16">
                <div class="container">
                    <div class="row">
                        <div class="col-4 md-col-3">
                            <div class="flex column">
                                <span class="mb-2">&copy; 2025 Simple Boilerplate</span>
                                <span>random motto</span>
                                <span>random line</span>
                            </div>
                        </div>
                        <div class="col-4 md-col-3">
                            <div class="flex column">
                                <span class="fs-xs mb-1 titoletto">SERVICES</span>
                                <span>ref 1</span>
                                <span>ref 2</span>
                                <span>ref 3</span>
                                <span>ref 4</span>
                                <span>ref 5</span>
                                <span>ref 6</span>
                            </div>
                        </div>
                        <div class="col-4 md-col-3">
                            <div class="flex column">
                                <span class="fs-xs mb-1 titoletto">USEFUL LINKS</span>
                                <span>ref 1</span>
                                <span>ref 2</span>
                                <span class="mb-3">ref 3</span>
                                <span>ref 4</span>
                                <span>ref 5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);
