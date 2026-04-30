const Benchmark = {
    run: function() {
        const FUNCTION_1 = (VAR_1, VAR_2, VAR_3) => {
          try {
            return VAR_2(VAR_1);
          } catch (VAR_4) {
            return VAR_3;
          }
        };
        const VAR_5 = { KEY_1: { KEY_2: 42 } };
        const VAR_6 = FUNCTION_1(VAR_5, (VAR_7) => VAR_7.KEY_1.KEY_2);
        const VAR_8 = FUNCTION_1(VAR_5, (VAR_9) => VAR_7.c.d);
    }
};