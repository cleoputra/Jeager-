export const scrollToTop = () => {
    const $ = window.$;
    $(document).ready(function () {
        $(this).scrollTop(0);
    });
};