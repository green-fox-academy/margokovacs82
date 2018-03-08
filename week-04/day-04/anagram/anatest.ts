'use strict';

import { test } from 'tape';
import { anagram } from './anagram'

test('are they anagrams', t => {
  t.plan(3);
  t.equal(anagram("joe", "ejo"), true);
  t.equal(anagram("mary", "army"), true);
  t.equal(anagram("mary", "ejo"), false);   
});