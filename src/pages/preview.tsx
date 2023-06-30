import { WordPressTemplate } from '@faustwp/core';
import { WordPressTemplateProps } from '@faustwp/core/dist/cjs/components/WordPressTemplate';

export default function Preview(props:WordPressTemplateProps) {
    console.log('from preview', props)
  return <WordPressTemplate {...props} />;
}
