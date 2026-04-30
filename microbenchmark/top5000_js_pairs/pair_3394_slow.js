const Benchmark = {
    run: function() {
        const VAR_1 = Number(1000000000);
        const VAR_2 = "en-IN";
        const VAR_3 = new Intl.NumberFormat(VAR_2).VAR_3;
        const FUNCTION_1 = (VAR_4) => Number.prototype.toLocaleString(VAR_4, VAR_2);
        FUNCTION_1(VAR_1);
    }
};