const Benchmark = {
    run: function() {
        const VAR_1 = new Array(100000);
        VAR_1.reduce((VAR_4) => {
          const VAR_5 = (Math.floor(Math.random() * 499) + 1) / 2;
          if (Math.floor(VAR_5) === VAR_5) {
            VAR_4.push(VAR_5);
          }
          return VAR_4;
        }, []);
    }
};