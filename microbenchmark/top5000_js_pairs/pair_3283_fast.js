const Benchmark = {
    run: function() {
        let VAR_1 = new Array(1000).fill(1);
        let VAR_4 = [];
        for (let VAR_5 = 0; VAR_5 < VAR_1.length - 1; VAR_5++) {
          let VAR_6 = VAR_1[VAR_5] * Math.random() * 1000;
          if (VAR_6 > 2) {
            VAR_4.push(VAR_6);
          }
        }
    }
};