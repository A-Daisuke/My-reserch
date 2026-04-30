const Benchmark = {
    run: function() {
        let VAR_1 = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
        VAR_1.filter((VAR_2) => VAR_1.reduce((VAR_3, VAR_4) => (VAR_4 === VAR_2 ? ++VAR_3 : VAR_3), 0) & 1)[0];
    }
};