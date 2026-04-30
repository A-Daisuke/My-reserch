const Benchmark = {
    run: function() {
        let VAR_1 = "abcd";
        const VAR_2 = new TextEncoder("utf-8");
        for (let VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2.encode(VAR_1);
        }
    }
};