const Benchmark = {
    run: function() {
        const VAR_1 = { KEY_1: "nope" };
        const FUNCTION_1 = (VAR_2) => {
          try {
            return VAR_2();
          } catch (VAR_3) {
            return;
          }
        };
        console.log(FUNCTION_1(() => VAR_1.bar.baz.wow.its.deep));
    }
};