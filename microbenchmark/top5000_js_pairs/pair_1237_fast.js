const Benchmark = {
    run: function() {
        let VAR_1 = "abcd";
        for (let VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          JSON.stringify(VAR_1);
        }
    }
};