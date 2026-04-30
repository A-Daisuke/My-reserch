const Benchmark = {
    run: function() {
        let VAR_1 = [...new Array(1000)].map(() =>
          (Math.random() * 10000000 + 1000).toString(2),
        );
        VAR_1.map((VAR_2) => {
          let VAR_3 = "";
          for (let VAR_4 = 0; VAR_4 < VAR_2.length; VAR_4 += 4) {
            VAR_3 += VAR_2.substr(VAR_4, 4);
          }
          return VAR_3;
        });
    }
};