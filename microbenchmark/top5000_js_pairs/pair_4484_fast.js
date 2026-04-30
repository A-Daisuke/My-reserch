const Benchmark = {
    run: function() {
        const VAR_1 = [{ KEY_1: 1 }, { KEY_2: 2 }, { KEY_3: 3 }, { KEY_4: 1 }, { KEY_5: 1 }, { KEY_6: 3 }];
        VAR_1.reduce((VAR_2, VAR_3, VAR_4) => {
          const VAR_5 = VAR_2.some((VAR_6) => VAR_6.KEY_1 === VAR_3.KEY_1);
          return VAR_5 ? VAR_2 : [...VAR_2, VAR_3];
        }, []);
    }
};