const Benchmark = {
    run: function() {
        VAR_1 = 15;
        VAR_2 = Array(VAR_1).join("A");
        VAR_3 = VAR_2.match(/AA+B/);
    }
};