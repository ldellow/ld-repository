import * as fields from './fields';
+
+export default class FieldFactory{
+    createField(type:string):fields.Field{
+        switch(type) {
+            case 'phone':
+                return new fields.PhoneNumberField();
+            case 'text':
+                return new fields.TextField();
+            case 'employee':
+                return new fields.EmployeeField();
+            case 'country':
+                return new fields.CountryField();
+            case 'checkbox':
+                return new fields.CountryField();
+            default:
+                return null;
+        }
+
+    }
+}