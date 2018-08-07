/**
 * @providesModule Common
 */
import {
    Dimensions
} from 'react-native';


/* 
@providesModule使用

在文件的顶部，嵌套一个多行注释，把@providesModule放在注释里,@providesModule后添加类名,以后就直接使用类名就能导入了。

注意点，带有@providesModule的多行注释，一定要是文件的第一个多行注释。
*/
export default class Common {

    static bgColor = 'rgb(232,232,232)';

    static screenW = Dimensions.get('window').width;

    static screenH = Dimensions.get('window').height;
}
