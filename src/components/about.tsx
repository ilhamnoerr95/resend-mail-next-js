import React from "react";

interface Props {
	testProps: string;
}

const About: React.FC<Props> = (props) => {
	const { testProps } = props;
	return <div>ini props = {testProps}</div>;
};

export default About;
