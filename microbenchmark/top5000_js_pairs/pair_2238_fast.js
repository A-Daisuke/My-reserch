const Benchmark = {
    run: function() {
        let VAR_1 = new Array(10000);
        VAR_1.fill(1);
        let VAR_2 = 0;
        let VAR_4 = 0;
        while (VAR_4 < VAR_1.length) {
          VAR_2 += VAR_1[VAR_4++];
        }
        console.log(VAR_2);
    }
};