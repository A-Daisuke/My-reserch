const Benchmark = {
    run: function() {
        const VAR_1 = 200;
        const VAR_2 = [];
        for (let VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          for (let VAR_4 = 0; VAR_4 < VAR_1; VAR_4++) {
            VAR_2.push(VAR_4);
          }
        }
        let VAR_5, VAR_6;
        VAR_5 = VAR_2.filter((VAR_7, VAR_8) => VAR_2.indexOf(VAR_7) === VAR_8);
    }
};