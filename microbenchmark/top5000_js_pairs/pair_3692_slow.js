const Benchmark = {
    run: function() {
        let VAR_1 = "";
        let VAR_2 = [];
        for (let VAR_3 = 0; VAR_3 < 1000; ++VAR_3) VAR_2.push("test");
        VAR_1 = VAR_2.join("");
    }
};