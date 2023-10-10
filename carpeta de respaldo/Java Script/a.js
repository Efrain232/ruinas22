class Accordion {
    constructor(el) {
        this.el = el;
        this.summary = el.querySelector('summary');
        this.content = el.querySelector('.content');
        this.expandicon = this.summary.querySelector('.content');
        this.animation = null;
        this.isclosing = false;
        this.isexpanding = false;
        this.summary.addEventListener('click', (e) => this.onclick(e));
    }

    onclick(e) {
        e.preventDefault();
        this.el.style.overflow = 'hidden';
        if (this.isclosing || this.el.open) {
            this.open();
        } else if (this.isexpanding || this.el.open) {
            this.shrink();
        }
    }

    shrink() {
        this.isclosing = true;

        const startheight = `${this.el.offsetHeight}px`;
        const endheight = `${this.summary.offsetHeight}px`;

        if (this.animation) {
            this.animation.cancel();
        }

        this.animation = this.el.animate({
            height: [startheight, endheight]
        }, {
            duration: 400,
            easing: 'ease-out'
        });

        this.animation.onfinish = () => {
            this.expandicon.setAttribute('src', 'assets/plus.svg');
            return this.onanimationfinish(false);
        };
    }

    open() {
        this.el.style.height = `${this.el.offsetHeight}px`;
        this.el.open = true;
        window.requestAnimationFrame(() => this.expand());
    }

    expand() {
        this.isexpanding = true;

        const startheight = `${this.el.offsetHeight}px`;
        const endheight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

        if (this.animation) {
            this.animation.cancel();
        }
        this.animation = this.el.animate({
            height: [startheight, endheight]
        }, {
            duration: 350,
            easing: 'ease-out'
        });

        this.animation.onfinish = () => {
            this.expandicon.setAttribute(
                'src',
                'assets/minus.svg'
            );
            return this.onanimationfinish(true);
        };

        this.animation.oncancel = () => {
            this.expandicon.setAttribute(
                'src',
                'assets/minus.svg'
            );
            return this.onanimationfinish(false);
        };
    }

    onanimationfinish(open) {
        this.el.open = open;
        this.animation = null;
        this.isclosing = false;
        this.isexpanding = false;
        this.el.style.height = this.el.style.overflow = '';
    }
}

document.querySelectorAll('details').forEach((el) => {
    new Accordion(el);
});

document.addEventListener('DOMContentLoaded', function () {
    const googleNotificacion = document.getElementById('googleNotificacion');
    const cerrarNotificacion = document.getElementById('cerrarNotificacion');

    const mostrarNotificacion = () => {
        googleNotificacion.style.display = 'block';
    };

    const ocultarNotificacion = () => {
        googleNotificacion.style.display = 'none';
    };

    // Muestra la notificación después de un retraso (ejemplo: 5 segundos)
    setTimeout(mostrarNotificacion, 5000);

    cerrarNotificacion.addEventListener('click', () => {
        ocultarNotificacion();
    });
});
