const Benchmark = {
    run: function() {
        let VAR_1 = "";
        const VAR_2 = 10000;
        let VAR_3 = 0;
        for (; VAR_3 < VAR_2; VAR_3++) {
          VAR_1 += "*";
        }
    }
};