class HeaderComponent extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Page';
        const links = this.getAttribute('links') || '[]';
        
        // Parse links JSON string
        let linkElements = '';
        try {
            const linksArray = JSON.parse(links);
            linkElements = linksArray
                .map(link => `<a class="navbarLink fs-lg ml-2" href="${link.url}">${link.text}</a>`)
                .join('\n            ');
        } catch (e) {
            // Invalid links format, use empty links
        }

        this.innerHTML = /*html*/ `
            <header class="container">
                <nav class="row">
                    <h1 class="sm-col-2 md-col-3 lg-col-4">
                        ${title}
                    </h1>
                    <div class="sm-col-2 md-col-5 lg-col-8 flex row jc-end ai-center">
                        <div id="authStatus" class="auth-status">
                            <!-- Will be populated by JavaScript -->
                        </div>
                        <div>
                            ${linkElements}
                        </div>
                    </div>
                </nav>
            </header>
        `;
    }
}

customElements.define('header-component', HeaderComponent);
