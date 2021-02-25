import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut',
})
export class ShortcutPipe implements PipeTransform {
  transform(value: String, limit = 20): String {
    // cắt còn 20 kí tự
    return value.length > limit ? value.substr(0, limit) + '...' : value;
  }
}
