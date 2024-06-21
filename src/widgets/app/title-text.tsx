const AppTitleText: React.FC<{
  title?: string;
  smallTitle?: string;
  subTitle?: string;
}> = ({ title, smallTitle, subTitle }) => {
  return (
    <div className="space-y-0.5">
      <p className="text-[#212121] text-xl font-semibold -tracking-[0.5%]">
        {title}
      </p>
      <p className="text-[#212121]">
        {smallTitle}
      </p>
      <p className="text-xs text-[#9B9B9B]">{subTitle}</p>
    </div>
  );
};

export default AppTitleText;
