import { notice } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default function errorNotify() {
  notice({
    text: 'No match found for your request, please repeat the correct input!',
    delay: 2000,
  });
}
