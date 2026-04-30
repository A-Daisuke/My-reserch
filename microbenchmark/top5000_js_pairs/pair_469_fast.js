const Benchmark = {
    run: function() {
        let VAR_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        let VAR_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        let VAR_3 = [];
        let VAR_4 = 1000;
        for (let VAR_5 = VAR_4; VAR_5 > 0; VAR_5--) {
          VAR_1 = VAR_1.concat(VAR_2);
        }
    }
};