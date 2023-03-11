import { test } from "uvu";
import * as assert from "uvu/assert";
import WordSnatchersCliToolsVocabularyPlugin from "../index.js";

let wordSnatchersCliToolsVocabularyPlugin;

test.before.each(() => {
  wordSnatchersCliToolsVocabularyPlugin =
    new WordSnatchersCliToolsVocabularyPlugin();
});

test("WordSnatchersCliToolsVocabularyPlugin#build", () => {
  const items = wordSnatchersCliToolsVocabularyPlugin.build();

  items.map((item) =>
    assert.ok(item.definition.length > 4 && item.word.length > 1)
  );
});

test.run();
