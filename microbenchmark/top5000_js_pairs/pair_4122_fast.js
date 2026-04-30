const Benchmark = {
    run: function() {
        VAR_1 = [];
        VAR_2 = null;
        VAR_3 = [1];
        (VAR_1 || []).length;
        (VAR_2 || []).length;
        (VAR_3 || []).length;
    }
};