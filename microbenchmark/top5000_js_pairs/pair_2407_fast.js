const Benchmark = {
    run: function() {
        let VAR_1 = new Array(10000);
        VAR_1.fill(1);
        let VAR_2 = 0;
        for (let VAR_4 = 0, VAR_5; (VAR_5 = VAR_1[VAR_4]); VAR_4++) {
          VAR_2 += VAR_1[VAR_4];
        }
        console.log(VAR_2);
    }
};